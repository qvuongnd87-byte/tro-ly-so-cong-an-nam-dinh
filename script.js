// --- MẢNG 1: NỘI DUNG PHÒNG NGỪA TỘI PHẠM & TNXH ---
const phongNguaAnswers = [
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

// --- MẢNG 2: NỘI DUNG THỦ TỤC HÀNH CHÍNH VÀ CƯ TRÚ ---
const cuTruAnswers = [
  {
    keys: ["dang ky luu tru", "thong bao luu tru", "khach den o tro", "luu tru"],
    answer: "Về thủ tục Thông báo lưu trú:\n- Đối tượng: Người đến ở qua đêm tại cơ sở kinh doanh dịch vụ lưu trú, nhà cho thuê, nhà khách, nhà ở của hộ gia đình.\n- Hồ sơ: Trực tiếp qua cổng dịch vụ công trực tuyến hoặc đến trực tiếp Công an phường.\n- Thời hạn: Phải thông báo ngay khi người đến lưu trú (trước 23h đêm, trường hợp đặc biệt trước 08h sáng hôm sau)."
  },
  {
    keys: ["dang ky thuong tru", "nhap ho khau", "nhap khau", "tach khau"],
    answer: "Về đăng ký thường trú:\n- Điều kiện: Công dân có chỗ ở hợp pháp thuộc quyền sở hữu của mình hoặc được thuê/mượn/ở nhờ (được chủ hộ và chủ chỗ ở hợp pháp đồng ý).\n- Hồ sơ: Tờ khai thay đổi thông tin cư trú; giấy tờ chứng minh chỗ ở hợp pháp.\n- Nộp hồ sơ: Trực tuyến qua Cổng dịch vụ công Quốc gia/Bộ Công an hoặc trực tiếp tại Công an cấp xã/phường."
  },
  {
    keys: ["lam cccd", "lam the cccd", "doi cccd", "cap lai cccd", "can cuoc"],
    answer: "Về thủ tục cấp/đổi/cấp lại Thẻ Căn cước:\n- Công dân trực tiếp đến bộ phận tiếp nhận hồ sơ Công an cấp huyện hoặc địa điểm được phân cấp.\n- Hồ sơ chuẩn bị: Thẻ Căn cước cũ (nếu có); giấy tờ pháp lý chứng minh thông tin thay đổi (nếu có).\n- Thời gian giải quyết: Theo quy định hiện hành."
  }
];

function getAnswer(question){
  const q = question.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  
  // 1. Kiểm tra trong mảng phòng ngừa tội phạm
  for(const item of phongNguaAnswers){
    if(item.keys.some(k => q.includes(k.normalize("NFD").replace(/[\u0300-\u036f]/g,"")))){
      return item.answer;
    }
  }

  // 2. Kiểm tra trong mảng thủ tục cư trú
  for(const item of cuTruAnswers){
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
