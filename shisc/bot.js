const Discord = require('discord.js');

const botToken = 'MTA5MTgxNzQwNjY4ODY2MTU4NQ.GGzGnw.MSzSiKjNRECoopMwAV3pfIzAEeLm_wnaNG9bw4';

const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

bot.login(botToken);

function sendMessage() {
  const messageInput = document.getElementById('message');
  const messageContent = messageInput.value;
  messageInput.value = '';

  const chatDiv = document.getElementById('chat');
  const messageDiv = document.createElement('div');
  messageDiv.innerHTML = `You: ${messageContent}`;
  chatDiv.appendChild(messageDiv);
}
