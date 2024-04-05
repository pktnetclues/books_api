const logoutAdmin = async (req, res) => {
  try {
    // const { token } = req.cookies;

    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = logoutAdmin;
