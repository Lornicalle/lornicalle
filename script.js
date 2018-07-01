function SetHeader(name) {
    console.log("setting header to " + name + "...");
    if (name === "")
    {
        name = "index";
    }
    document.getElementById(name.split('.')[0]).setAttribute("id", "sellist");
}
