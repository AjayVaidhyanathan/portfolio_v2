// ── CANNED RESPONSES
const responses = {
    keywords: {
        'hello|hi|hey|yo': { topic: 'intro', text: "Hey! Great to connect. I'm Ajay — a PM with 7 years of experience building products people actually use. What would you like to know?" },
        'yourself|about|introduce': { topic: 'intro', text: "Sure! I'm a product manager who loves turning messy problems into clear strategies. I've worked across B2B SaaS, consumer, and enterprise — always focused on understanding users deeply before writing a single spec." },
        'work|process|approach|how': { topic: 'approach', text: "My process always starts with discovery. I don't write a spec until I understand what problem we're actually solving. Then strategy, then delivery. I like to ship small and learn fast." },
        'case study|project|built': { topic: 'casestudy', text: "One I'm proud of: I redesigned a core workflow for a B2B SaaS product that was causing 40% churn. Through JTBD interviews I found users were repeating the same action 4 times unnecessarily. We collapsed it into one step. Churn dropped 40%." },
        'hire|why you|strengths': { topic: 'whyme', text: "I think the best PMs are the ones who make everyone around them better. I write specs engineers actually want to read, I give designers real context, and I push back constructively — including on my own ideas." },
        'building|side project|making': { topic: 'building', text: "Right now I'm building a customer intent tool — a widget that sits on any website, captures what visitors are actually looking for, and surfaces those patterns to the business owner as clear weekly insights. BYOS, BYOAI architecture." },
        'experience|years|background': { topic: 'intro', text: "7+ years across fintech, consumer apps, and enterprise SaaS. I've done 0→1 at seed startups, scaled products to millions of users, and built business cases that got $2M approved. Industries don't really scare me at this point." },
        'available|looking|open': { topic: 'whyme', text: "Yes — actively looking for full-time PM roles right now. I'm open to hybrid or remote. If what I've said resonates with what you're building, I'd love to continue the conversation properly. You can reach me at hello@ajayvaidhyanathan.com." },
        'salary|compensation|pay': { topic: 'whyme', text: "Happy to discuss that in a real conversation! I care more about the problem space and team quality than hitting an exact number. Let's chat — hello@ajayvaidhyanathan.com." },
    },
    default: { topic: 'intro', text: "That's a great question. I don't have a pre-recorded answer for that one, but let's keep talking — or email me at hello@ajayvaidhyanathan.com and I'll give you a proper answer." }
};

// ── STATE
let currentTopic = 'intro';
let callStarted = false;
let callSeconds = 0;
let isMuted = false;
let isCamOff = false;
let chatVisible = true;
let timerInterval = null;

// ── JOIN CALL
function joinCall() {
    const join = document.getElementById('joinScreen');
    const call = document.getElementById('callUI');
    join.classList.add('hidden');
    call.style.opacity = '1';
    callStarted = true;
    startTimer();
    showToast('Connected to Ajay Swaminathan ✓');

    // Auto-greet after 1.5s
    setTimeout(() => {
        ajaySpeaks("Hey, glad you joined! 👋 Feel free to type a question or pick a topic below.", 'intro');
    }, 1500);
}

// ── TIMER
function startTimer() {
    timerInterval = setInterval(() => {
        callSeconds++;
        const m = String(Math.floor(callSeconds / 60)).padStart(2, '0');
        const s = String(callSeconds % 60).padStart(2, '0');
        document.getElementById('callTimer').textContent = m + ':' + s;
    }, 1000);
}

// ── PLAY TOPIC VIDEO
function playTopic(topic, el) {
    document.querySelectorAll('.topic-item').forEach(t => t.classList.remove('active-topic'));
    if (el) el.classList.add('active-topic');

    // Switch video
    document.querySelectorAll('.main-video').forEach(v => {
        v.pause(); v.classList.remove('active');
    });

    currentTopic = topic;
    const vid = document.getElementById('vid-' + topic);

    if (vid && vid.src && vid.src !== window.location.href) {
        document.getElementById('videoPlaceholder').style.opacity = '0';
        vid.classList.add('active');
        vid.currentTime = 0;
        vid.play().catch(() => { });
        setSpeaking(true);
        vid.onended = () => setSpeaking(false);
    } else {
        // No video yet — just animate avatar
        document.getElementById('videoPlaceholder').style.opacity = '1';
        setSpeaking(true);
        setTimeout(() => setSpeaking(false), 3000);
    }

    // Topic labels map
    const labels = {
        intro: "Introduction", approach: "How I work",
        casestudy: "Case study", whyme: "Why hire me", building: "What I'm building"
    };
    showToast(`Now playing: ${labels[topic]}`);
}

// ── SPEAKING STATE
function setSpeaking(speaking) {
    const tile = document.getElementById('mainTile');
    const avatar = document.getElementById('mainAvatar');
    tile.classList.toggle('speaking', speaking);
    avatar.classList.toggle('speaking', speaking);
}

// ── SEND CHAT MESSAGE
function sendMessage() {
    const input = document.getElementById('chatInput');
    const text = input.value.trim();
    if (!text) return;

    addMessage('me', 'You', text);
    input.value = '';
    input.style.height = 'auto';

    // Find response
    const resp = findResponse(text.toLowerCase());

    // Show typing indicator
    showTyping(true);
    setTimeout(() => {
        showTyping(false);
        ajaySpeaks(resp.text, resp.topic);
        // Auto switch topic tab
        playTopic(resp.topic, document.querySelector(`[onclick="playTopic('${resp.topic}', this)"]`));
    }, 1200 + Math.random() * 800);
}

function findResponse(text) {
    for (const [pattern, resp] of Object.entries(responses.keywords)) {
        if (new RegExp(pattern).test(text)) return resp;
    }
    return responses.default;
}

function ajaySpeaks(text, topic) {
    addMessage('them', 'Ajay Swaminathan', text);
    setSpeaking(true);
    // Simulate speaking duration based on text length
    const duration = Math.min(Math.max(text.length * 40, 2000), 6000);
    setTimeout(() => setSpeaking(false), duration);
}

function addMessage(type, sender, text) {
    const messages = document.getElementById('chatMessages');
    const now = new Date();
    const time = now.getHours() + ':' + String(now.getMinutes()).padStart(2, '0');

    const div = document.createElement('div');
    div.className = `msg ${type}`;
    div.innerHTML = `
    <span class="msg-sender">${sender}</span>
    <div class="msg-bubble">${text}</div>
    <span class="msg-time">${time}</span>
  `;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
}

function showTyping(show) {
    document.getElementById('typingIndicator').classList.toggle('show', show);
    const msgs = document.getElementById('chatMessages');
    msgs.scrollTop = msgs.scrollHeight;
}

// ── KEYBOARD
function handleKey(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage();
    }
}

function autoResize(el) {
    el.style.height = 'auto';
    el.style.height = Math.min(el.scrollHeight, 120) + 'px';
}

// ── TABS
function switchTab(tab, btn) {
    document.querySelectorAll('.side-tab').forEach(t => t.classList.remove('active'));
    btn.classList.add('active');

    const chat = document.getElementById('chatMessages');
    const topics = document.getElementById('topicsPanel');
    const typing = document.getElementById('typingIndicator');
    const input = document.querySelector('.chat-input-wrap');

    if (tab === 'chat') {
        chat.style.display = 'flex';
        typing.style.display = '';
        input.style.display = 'flex';
        topics.classList.remove('active');
    } else {
        chat.style.display = 'none';
        typing.style.display = 'none';
        input.style.display = 'none';
        topics.classList.add('active');
    }
}

// ── CONTROLS
function toggleCtrl(btn, offLabel, onLabel) {
    btn.classList.toggle('danger');
    btn.classList.toggle('off');
    const label = btn.querySelector('.ctrl-label');
    label.textContent = btn.classList.contains('danger') ? offLabel : onLabel;
}

function toggleChat() {
    const panel = document.querySelector('.side-panel');
    chatVisible = !chatVisible;
    panel.style.display = chatVisible ? 'grid' : 'none';
    document.getElementById('chatToggleBtn').classList.toggle('active-ctrl', chatVisible);
}

function toggleTopics() {
    // Switch to topics tab
    const topicsTab = document.querySelectorAll('.side-tab')[1];
    if (!document.querySelector('.side-panel').style.display || document.querySelector('.side-panel').style.display === 'none') {
        document.querySelector('.side-panel').style.display = 'grid';
        chatVisible = true;
    }
    switchTab('topics', topicsTab);
    document.querySelectorAll('.side-tab').forEach(t => t.classList.remove('active'));
    topicsTab.classList.add('active');
}

// ── REACTION
function sendReaction(emoji) {
    const controls = document.getElementById('controls');
    const el = document.createElement('div');
    el.className = 'reaction';
    el.textContent = emoji;
    el.style.left = (40 + Math.random() * 200) + 'px';
    controls.parentElement.appendChild(el);
    setTimeout(() => el.remove(), 2100);
}

// ── END CALL
function endCall() {
    showToast('Leaving call...');
    setTimeout(() => {
        document.getElementById('callUI').style.opacity = '0';
        clearInterval(timerInterval);
        setTimeout(() => {
            document.getElementById('joinScreen').classList.remove('hidden');
            document.getElementById('callUI').style.opacity = '0';
            document.getElementById('callTimer').textContent = '00:00';
            callSeconds = 0;
        }, 600);
    }, 800);
}

// ── TOAST
function showToast(msg) {
    const t = document.getElementById('toast');
    t.textContent = msg;
    t.classList.add('show');
    clearTimeout(window._toastTimer);
    window._toastTimer = setTimeout(() => t.classList.remove('show'), 2800);
}

// Auto-expand chat textarea
document.getElementById('chatInput').addEventListener('input', function () {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 120) + 'px';
});
