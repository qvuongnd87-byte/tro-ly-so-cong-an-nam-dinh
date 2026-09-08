function getAnswer(question){
  const q = question.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g,"");
  
  // Kiểm tra mảng phòng ngừa tội phạm
  for(const item of phongNguaAnswers){
    if(item.keys.some(k => q.includes(k.normalize("NFD").replace(/[\u0300-\u036f]/g,"")))){
      return item.answer;
    }
  }

  // Kiểm tra mảng cư trú và dịch vụ công (chỉ cần câu hỏi chứa từ khóa chính)
  for(const item of cuTruAnswers){
    // Kiểm tra nếu bất kỳ từ khóa cốt lõi nào xuất hiện trong câu hỏi của người dân
    if(item.keys.some(keyword => {
      const cleanKeyword = keyword.normalize("NFD").replace(/[\u0300-\u036f]/g,"");
      return q.includes(cleanKeyword);
    })){
      return item.answer;
    }
  }

  // Phản hồi khi không tìm thấy dữ liệu
  return "Nội dung này hiện chưa có trong cơ sở dữ liệu của Trợ lý số.\n\nĐể được hướng dẫn và giải đáp chính xác, người dân vui lòng liên hệ trực tiếp với cơ quan Công an phường Nam Định:\n- ☎️ Trực ban Công an phường: [Nhập số điện thoại trực ban]\n- 💬 Hoặc nhắn tin trực tiếp qua trang Zalo/Fanpage chính thức của đơn vị để được cán bộ trực ban tiếp nhận và hỗ trợ.";
}
