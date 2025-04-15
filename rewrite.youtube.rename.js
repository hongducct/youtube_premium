let body = $response.body;

// Thay thế "YouTube" thành "Premium" trong nội dung phản hồi
body = body.replace(/YouTube/g, "Premium");

$done({ body });
