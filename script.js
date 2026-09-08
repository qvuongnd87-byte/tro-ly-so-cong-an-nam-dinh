// --- MẢNG 1: PHÒNG NGỪA TỘI PHẠM, TNXH, MA TÚY & HÌNH SỰ ---
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
    keys: ["cài ứng dụng", "ứng dụng", "đường link", "link", "vneid gia", "cai app"],
    answer: "Không nên tự ý cài đặt ứng dụng (như app giả mạo dịch vụ công, cơ quan thuế, v.v.) hoặc truy cập đường link do người lạ cung cấp. Cần xác định rõ nguồn gốc trước khi thực hiện."
  },
  {
    keys: ["đã chuyển tiền", "chuyển tiền rồi", "bị lừa", "mất tiền"],
    answer: "Bạn cần khẩn trương liên hệ ngân hàng để được hướng dẫn xử lý giao dịch và đồng thời trình báo ngay với cơ quan Công an. Hãy giữ lại số điện thoại, tin nhắn, tài khoản nhận tiền, thời gian, số tiền và các chứng từ giao dịch liên quan."
  },
  {
    keys: ["ma tuy", "te nan ma tuy", "nguoi ngien", "diem ma tuy", "dau hieu ma tuy"],
    answer: "Về phòng ngừa tệ nạn ma túy:\n- Dấu hiệu nghi vấn: Thường xuyên tụ tập nơi khuất, biểu hiện tâm lý bất thường, sụt cân nhanh, hay xin tiền hoặc có vật dụng liên quan đến sử dụng ma túy.\n- Trách nhiệm: Quản lý con em, kịp thời tố giác các điểm, tụ điểm phức tạp về ma túy cho Công an phường để xử lý nghiêm theo pháp luật."
  },
  {
    keys: ["hinh su", "trom cap", "danh nhau", "gay roi", "tin dung den", "co bac", "cho vay nang lai"],
    answer: "Về phòng ngừa tội phạm hình sự và tệ nạn xã hội:\n- Cảnh giác với tội phạm trộm cắp tài sản, cờ bạc, cá độ bóng đá và “tín dụng đen” (vay tiền nhanh qua app hoặc tờ rơi lãi suất cao).\n- Khi phát hiện các vụ việc vi phạm pháp luật, mâu thuẫn gây rối hoặc đối tượng nghi vấn trên địa bàn, người dân hãy báo ngay cho Công an phường Nam Định để kịp thời can thiệp, xử lý."
  }
];

// --- MẢNG 2: THỦ TỤC CƯ TRÚ, CĂN CƯỚC & VNEID ---
const cuTruAnswers = [
  {
    keys: ["vneid", "kich hoạt vneid", "tai khoan dinh danh", "dinh danh dien tu", "muc do 2"],
    answer: "Hướng dẫn về tài khoản định danh điện tử VNeID:\n- Kích hoạt VNeID mức độ 2: Công dân mang theo Thẻ Căn cước gắn chip đến trực tiếp Công an phường để được hỗ trợ thu nhận/kích hoạt.\n- Quên mật khẩu VNeID: Có thể tự lấy lại ngay trên ứng dụng bằng chức năng “Quên mật khẩu” hoặc đến Công an phường để được hướng dẫn."
  },
  {
    keys: ["cccd", "can cuoc", "lam cccd", "doi cccd", "cap lai cccd", "mat cccd"],
    answer: "Về thủ tục cấp, đổi, cấp lại thẻ Căn cước:\n- Địa điểm: Công an cấp huyện hoặc bộ phận được phân cấp.\n- Hồ sơ: Mang theo Thẻ Căn cước cũ (nếu có); trường hợp mất thẻ hoặc thay đổi thông tin nhân thân sẽ được CBCS thu thập sinh trắc học và lập hồ sơ trực tiếp theo quy định."
  },
  {
    keys: ["dang ky thuong tru", "nhap ho khau", "nhap khau", "tach khau"],
    answer: "Về đăng ký thường trú:\n- Điều kiện: Công dân có chỗ ở hợp pháp thuộc quyền sở hữu của mình hoặc được thuê/mượn/ở nhờ (được chủ hộ và chủ chỗ ở hợp pháp đồng ý).\n- Hồ sơ: Tờ khai thay đổi thông tin cư trú; giấy tờ chứng minh chỗ ở hợp pháp.\n- Nộp hồ sơ: Trực tuyến qua Cổng dịch vụ công hoặc trực tiếp tại Công an phường."
  },
  {
    keys: ["dang ky tam tru", "tam tru", "khach den o tro", "thong bao lưu trú"],
    answer: "Về đăng ký tạm trú và thông báo lưu trú:\n- Đăng ký tạm trú: Dành cho công dân đến sinh sống tại chỗ ở hợp pháp ngoài phạm vi đơn vị hành chính cấp xã nơi đăng ký thường trú từ 30 ngày trở lên.\n- Thông báo lưu trú: Khách đến ở qua đêm tại nhà cho thuê, cơ sở lưu trú phải được thông báo qua Cổng dịch vụ công hoặc trực tiếp cho Công an phường trước 23h đêm."
  }
];

function getAnswer(question){
  const q = question.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  
  for(const item of phongNguaAnswers){
    if(item.keys.some(k => q.includes(k.normalize("NFD").replace(/[\u0300-\u036f]/g,"")))){
      return item.answer;
    }
  }

  for(const item of cuTruAnswers){
    if(item.keys.some(k => q.includes(k.normalize("NFD").replace(/[\u0300-\u036f]/g,"")))){
      return item.answer;
    }
  }

  return "Nội dung này hiện chưa có trong phạm vi thông tin của Trợ lý số. Để được hướng dẫn chính xác, người dân liên hệ trực tiếp với cơ quan Công an phường Nam Định.";
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
