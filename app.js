const users = [
  {
    id: 1,
    name: "Eden Park",
    email: "edenpark@gmail.com",
    password: "123qwe",
  },
  {
    id: 2,
    name: "Elena Joo",
    email: "elenajoo@gmail.com",
    password: "qwerty123",
  },
];

const posts = [
  {
    id: 1,
    title: "안녕하세요",
    content: "Node.js에 내장되어 있는 http 모듈을 사용해서 HTTP server를 구현.",
    userId: 1,
  },
  {
    id: 2,
    title: "HTTP의 특성",
    content: "Request/Response와 Stateless!!",
    userId: 1,
  },
];

const createUser = (req, res) => {
  const user = req.body.data;
  console.log("requst body :", req.body);

  users.push({
    id: user.id,
    name: user.name,
    email: user.email,
    password: user.password,
  });

  res.json({ message: "ID_CREATED!" });
};

const createPost = (req, res) => {
  const post = req.body.data;
  console.log("requst body :", req.body);

  posts.push({
    id: post.id,
    title: post.name,
    content: post.content,
    userId: post.userId,
  });

  res.json({ message: "POST_CREATED!" });
};

module.exports = { createUser };

