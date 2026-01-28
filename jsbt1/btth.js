let tenSach = prompt("Nhập tên sách:").trim().toUpperCase;
let tacGia = prompt("Nhập tên tác giả:").toUpperCase();
let namXuatBan = +prompt("Nhập năm xuất bản:");
let giaTien = +prompt("Nhập giá tiền 1 cuốn:");
let soLuong = +prompt("Nhập số lượng nhập kho:");
let maTacGia = tacGia.substring(0, 3);
let soNgauNhien = Math.floor(Math.random() * 1000) + 1;
// let bookID = `${maTacGia}${namXuatBan}-${soNgauNhien}`;
let bookID = `${matacgia}${namxuatban}${songaunhien}`;
let tuoiSach = 2026 - namXuatBan;
let tongGiaTri = giaTien * soLuong;
let keSo = Math.floor(Math.random() * 10) + 1;
console.log(`
--- PHIẾU NHẬP KHO ---
Mã sách: ${bookID}
Tên sách: ${tenSach}
Tác giả: ${tacGia}
Năm xuất bản: ${namXuatBan}
Tuổi sách: ${tuoiSach} năm
Tổng giá trị: ${tongGiaTri} VNĐ
Ngăn kệ gợi ý: Kệ số ${keSo}
`);
