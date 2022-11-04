exports.getData = async (req, res) => {
  res.status(200).json({
    slackUsername: "oluwasemilore",
    age: 21,
    backend: true,
    bio: "I am oluwasemilore, a backend developer from Ogun State, Nigeria. I always get the job done",
  });
};
