var authError = [
    {
        errorCode : "auth/email-already-in-use",
        errorMessage : "คุณเคยลงทะเบียนแล้ว กรุณา Login ใหม่อีกครั้ง"
    },
    {
        errorCode : "auth/invalid-email",
        errorMessage : "รูปแบบ Email ไม่ถูกต้อง"
    },
    {
        errorCode : "auth/weak-password",
        errorMessage : "กรุณากรอกรหัสผ่านมากกว่าหรือเท่ากับ 6 ตำแหน่ง"
    }
]

exports.findAll = function() {
    return authError;
};

exports.findByErrorCode = function (errorCode) {
    for (var i = 0; i < authError.length; i++) {
        if (authError[i].errorCode == errorCode) return authError[i].errorMessage;
    }
};