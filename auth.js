function login(username, password) {
    // Kiểm tra dữ liệu rỗng
    if (!username || !password) {
        return false;
    }

    // Giả lập tài khoản bị khóa
    if (username === "locked") {
        return false;
    }

    // Tài khoản hợp lệ
    if (username === "admin" && password === "123") {
        return true;
    }

    return false;
}

module.exports = { login };
