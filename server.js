const { Client, LocalAuth } = require('whatsapp-web.js');
const express = require('express');
const qrcode = require('qrcode');
const fs = require('fs');
const path = require('path');
const { createClient } = require('@supabase/supabase-js');

const app = express();
const port = process.env.PORT || 3000;

// Supabase client
const supabaseUrl = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure public directory exists
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: {
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
        headless: true,
    }
});

client.on('qr', async (qr) => {
    console.log('QR RECEIVED');
    console.log('QR DATA:', qr);
    await qrcode.toFile('./public/qr.png', qr);
    console.log('QR code saved at ./public/qr.png');
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', message => {
    if (message.body.toLowerCase() === 'hi') {
        message.reply('Hello! 👋');
    } else if (message.body.toLowerCase() === 'help') {
        message.reply('How can I help you?');
    }
});

client.initialize();

app.use('/qr', express.static('public'));

// Home page
app.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>WhatsApp Bot</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    background: #0a0a0a;
                    color: #fafafa;
                    min-height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 2rem;
                }
                .container {
                    text-align: center;
                    max-width: 400px;
                }
                h1 {
                    font-size: 2rem;
                    margin-bottom: 1rem;
                    font-weight: 600;
                }
                .status {
                    background: #18181b;
                    border: 1px solid #27272a;
                    border-radius: 12px;
                    padding: 1.5rem;
                    margin-bottom: 1.5rem;
                }
                .status-dot {
                    display: inline-block;
                    width: 8px;
                    height: 8px;
                    background: #22c55e;
                    border-radius: 50%;
                    margin-right: 8px;
                    animation: pulse 2s infinite;
                }
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.5; }
                }
                .links {
                    display: flex;
                    gap: 1rem;
                    justify-content: center;
                }
                a {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    background: #fafafa;
                    color: #0a0a0a;
                    padding: 0.75rem 1.5rem;
                    border-radius: 8px;
                    text-decoration: none;
                    font-weight: 500;
                    transition: all 0.2s;
                }
                a:hover {
                    background: #e4e4e7;
                    transform: translateY(-1px);
                }
                a.secondary {
                    background: transparent;
                    color: #fafafa;
                    border: 1px solid #27272a;
                }
                a.secondary:hover {
                    background: #18181b;
                    border-color: #3f3f46;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>WhatsApp Bot</h1>
                <div class="status">
                    <span class="status-dot"></span>
                    Bot is running
                </div>
                <div class="links">
                    <a href="/qr/qr.png">Scan QR Code</a>
                    <a href="/comments" class="secondary">Comments</a>
                </div>
            </div>
        </body>
        </html>
    `);
});

// Comments API - Get all comments
app.get('/api/comments', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('comments')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) throw error;
        res.json(data);
    } catch (error) {
        console.error('Error fetching comments:', error);
        res.status(500).json({ error: 'Failed to fetch comments' });
    }
});

// Comments API - Create a comment
app.post('/api/comments', async (req, res) => {
    try {
        const { author_name, content } = req.body;

        if (!author_name || !content) {
            return res.status(400).json({ error: 'Author name and content are required' });
        }

        const { data, error } = await supabase
            .from('comments')
            .insert([{ author_name, content }])
            .select()
            .single();

        if (error) throw error;
        res.status(201).json(data);
    } catch (error) {
        console.error('Error creating comment:', error);
        res.status(500).json({ error: 'Failed to create comment' });
    }
});

// Comments page
app.get('/comments', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Comments - WhatsApp Bot</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
                    background: #0a0a0a;
                    color: #fafafa;
                    min-height: 100vh;
                    padding: 2rem;
                }
                .container {
                    max-width: 640px;
                    margin: 0 auto;
                }
                header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 2rem;
                }
                h1 {
                    font-size: 1.5rem;
                    font-weight: 600;
                }
                .back-link {
                    color: #a1a1aa;
                    text-decoration: none;
                    font-size: 0.875rem;
                    transition: color 0.2s;
                }
                .back-link:hover {
                    color: #fafafa;
                }
                .form-card {
                    background: #18181b;
                    border: 1px solid #27272a;
                    border-radius: 12px;
                    padding: 1.5rem;
                    margin-bottom: 2rem;
                }
                .form-group {
                    margin-bottom: 1rem;
                }
                label {
                    display: block;
                    font-size: 0.875rem;
                    color: #a1a1aa;
                    margin-bottom: 0.5rem;
                }
                input, textarea {
                    width: 100%;
                    padding: 0.75rem 1rem;
                    background: #09090b;
                    border: 1px solid #27272a;
                    border-radius: 8px;
                    color: #fafafa;
                    font-size: 1rem;
                    font-family: inherit;
                    transition: border-color 0.2s;
                }
                input:focus, textarea:focus {
                    outline: none;
                    border-color: #3f3f46;
                }
                textarea {
                    min-height: 100px;
                    resize: vertical;
                }
                button {
                    width: 100%;
                    padding: 0.75rem 1.5rem;
                    background: #fafafa;
                    color: #0a0a0a;
                    border: none;
                    border-radius: 8px;
                    font-size: 1rem;
                    font-weight: 500;
                    cursor: pointer;
                    transition: all 0.2s;
                }
                button:hover {
                    background: #e4e4e7;
                }
                button:disabled {
                    opacity: 0.5;
                    cursor: not-allowed;
                }
                .comments-section {
                    margin-top: 2rem;
                }
                .section-title {
                    font-size: 1rem;
                    color: #a1a1aa;
                    margin-bottom: 1rem;
                }
                .comments-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .comment {
                    background: #18181b;
                    border: 1px solid #27272a;
                    border-radius: 12px;
                    padding: 1.25rem;
                }
                .comment-header {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 0.75rem;
                }
                .comment-author {
                    font-weight: 500;
                    color: #fafafa;
                }
                .comment-date {
                    font-size: 0.75rem;
                    color: #71717a;
                }
                .comment-content {
                    color: #d4d4d8;
                    line-height: 1.6;
                    white-space: pre-wrap;
                }
                .empty-state {
                    text-align: center;
                    padding: 3rem 1rem;
                    color: #71717a;
                }
                .loading {
                    text-align: center;
                    padding: 2rem;
                    color: #71717a;
                }
                .error {
                    background: #450a0a;
                    border: 1px solid #7f1d1d;
                    color: #fca5a5;
                    padding: 1rem;
                    border-radius: 8px;
                    margin-bottom: 1rem;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <header>
                    <h1>Comments</h1>
                    <a href="/" class="back-link">Back to Dashboard</a>
                </header>

                <div id="error" class="error" style="display: none;"></div>

                <div class="form-card">
                    <form id="commentForm">
                        <div class="form-group">
                            <label for="author_name">Your Name</label>
                            <input type="text" id="author_name" name="author_name" placeholder="Enter your name" required>
                        </div>
                        <div class="form-group">
                            <label for="content">Comment</label>
                            <textarea id="content" name="content" placeholder="Write your comment..." required></textarea>
                        </div>
                        <button type="submit" id="submitBtn">Post Comment</button>
                    </form>
                </div>

                <div class="comments-section">
                    <h2 class="section-title">All Comments</h2>
                    <div id="commentsList" class="comments-list">
                        <div class="loading">Loading comments...</div>
                    </div>
                </div>
            </div>

            <script>
                const commentsList = document.getElementById('commentsList');
                const commentForm = document.getElementById('commentForm');
                const submitBtn = document.getElementById('submitBtn');
                const errorDiv = document.getElementById('error');

                function formatDate(dateString) {
                    const date = new Date(dateString);
                    return date.toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit'
                    });
                }

                function showError(message) {
                    errorDiv.textContent = message;
                    errorDiv.style.display = 'block';
                    setTimeout(() => {
                        errorDiv.style.display = 'none';
                    }, 5000);
                }

                function renderComments(comments) {
                    if (comments.length === 0) {
                        commentsList.innerHTML = '<div class="empty-state">No comments yet. Be the first to comment!</div>';
                        return;
                    }

                    commentsList.innerHTML = comments.map(comment => \`
                        <div class="comment">
                            <div class="comment-header">
                                <span class="comment-author">\${escapeHtml(comment.author_name)}</span>
                                <span class="comment-date">\${formatDate(comment.created_at)}</span>
                            </div>
                            <div class="comment-content">\${escapeHtml(comment.content)}</div>
                        </div>
                    \`).join('');
                }

                function escapeHtml(text) {
                    const div = document.createElement('div');
                    div.textContent = text;
                    return div.innerHTML;
                }

                async function loadComments() {
                    try {
                        const response = await fetch('/api/comments');
                        if (!response.ok) throw new Error('Failed to load comments');
                        const comments = await response.json();
                        renderComments(comments);
                    } catch (error) {
                        commentsList.innerHTML = '<div class="empty-state">Failed to load comments. Please refresh the page.</div>';
                        showError(error.message);
                    }
                }

                commentForm.addEventListener('submit', async (e) => {
                    e.preventDefault();
                    
                    const author_name = document.getElementById('author_name').value.trim();
                    const content = document.getElementById('content').value.trim();

                    if (!author_name || !content) {
                        showError('Please fill in all fields');
                        return;
                    }

                    submitBtn.disabled = true;
                    submitBtn.textContent = 'Posting...';

                    try {
                        const response = await fetch('/api/comments', {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({ author_name, content })
                        });

                        if (!response.ok) throw new Error('Failed to post comment');

                        commentForm.reset();
                        await loadComments();
                    } catch (error) {
                        showError(error.message);
                    } finally {
                        submitBtn.disabled = false;
                        submitBtn.textContent = 'Post Comment';
                    }
                });

                // Load comments on page load
                loadComments();
            </script>
        </body>
        </html>
    `);
});

app.listen(port, () => {
    console.log(\`Server running on port \${port}\`);
});
