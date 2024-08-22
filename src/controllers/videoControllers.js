export const trending = (req, res) => res.render("home", { pageTitle: "Home" });
export const see = (req, res) => res.render("home", { pageTitle: "Watch" });
export const edit = (req, res) => res.send("Edit");
export const upload = (req, res) => res.send("Upload");
export const deleteVideo = (req, res) => res.send("Delete Video");
export const watch = (req, res) => res.send("Watch");
