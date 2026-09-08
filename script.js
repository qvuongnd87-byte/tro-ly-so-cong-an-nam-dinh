const answers = [
  {
    keys: ["chuyển tiền", "xác minh tài khoản", "chuyển tiền để xác minh", "bảo đảm"],
    answer: "Người dân cần cảnh giác với yêu cầu chuyển tiền qua điện thoại để “xác minh”, “bảo đảm” hoặc phục vụ điều tra. Nếu nhận được yêu cầu như vậy, không nên chuyển tiền mà cần chủ động liên hệ cơ quan Công an để xác minh."
  },
  {
    keys: ["liên quan đến vụ án", "tự xưng là công an", "gọi điện", "cuộc gọi"],
    answer: "Bạn cần bình tĩnh, không hoảng sợ và không thực hiện ngay các yêu cầu của người gọi. Không chuyển tiền, không cung cấp thông tin bảo mật và chủ động liên hệ cơ quan Công an để xác minh."
  },
  {
    keys: ["cài ứng dụng", "ứng dụng", "đường link", "link"],
    answer: "Không nên tự ý cài đặt ứng dụng hoặc truy cập đường link do người lạ cung cấp. Cần xác định rõ nguồn gốc trước khi thực hiện bất kỳ thao tác nào."
  },
  {
    keys: ["đã chuyển tiền", "chuyển tiền rồi", "bị lừa", "mất tiền"],
    answer: "Bạn cần khẩn trương liên hệ ngân hàng để được hướng dẫn xử lý giao dịch và đồng thời trình báo ngay với cơ quan Công an. Hãy giữ lại số điện thoại, tin nhắn, tài khoản nhận tiền, thời gian, số tiền và các chứng từ giao dịch liên quan."
  },
  {
    keys: ["nhận biết", "dấu hiệu", "giả danh công an"],
    answer: "Các dấu hiệu cần cảnh giác gồm: người tự xưng là Công an gây sức ép về một vụ án hoặc vi phạm pháp luật; đe dọa bắt giữ hoặc xử lý nếu không làm theo; yêu cầu chuyển tiền, cung cấp OTP/mật khẩu; yêu cầu cài ứng dụng hoặc truy cập đường link bất thường. Khi nghi vấn, hãy chủ động liên hệ cơ quan Công an để xác minh."
  }
];

function getAnswer(question){
  const q = question.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  for(const item of answers){
    if(item.keys.some(k => q.includes(k.normalize("NFD").replace(/[\u0300-\u036f]/g,"")))){
      return item.answer;
    }
  }
  return "Nội dung này hiện chưa có trong phạm vi thông tin của Trợ lý số. Để được hướng dẫn chính xác, người dân liên hệ trực tiếp với cơ quan Công an.";
}

function addMessage(text, type){
  const chat = document.getElementById("chat");
  const row = document.createElement("div");
  row.className = "message " + type;
  const avatar = document.createElement("div");
  avatar.className = "avatar";
  avatar.textContent = type === "assistant" ? "AI" : "Bạn";
  const bubble = document.createElement("div");
  bubble.className = "bubble";
  bubble.textContent = text;
  if(type === "assistant"){ row.appendChild(avatar); row.appendChild(bubble); }
  else { row.appendChild(bubble); row.appendChild(avatar); }
  chat.appendChild(row);
  chat.scrollTop = chat.scrollHeight;
}

function ask(question){
  if(!question.trim()) return;
  addMessage(question.trim(), "user");
  setTimeout(() => addMessage(getAnswer(question), "assistant"), 250);
}

document.getElementById("chatForm").addEventListener("submit", e => {
  e.preventDefault();
  const input = document.getElementById("question");
  ask(input.value);
  input.value = "";
  input.focus();
});

document.querySelectorAll("[data-question]").forEach(btn => {
  btn.addEventListener("click", () => ask(btn.dataset.question));
});
