document.addEventListener("keydown", event => event.key == ' ' && !event.repeat && document.dispatchEvent(new KeyboardEvent("keydown", {metaKey: true, key: "d"})));
document.addEventListener("keyup", event => event.key == ' ' && !event.repeat && document.dispatchEvent(new KeyboardEvent("keydown", {metaKey: true, key: "d"})));
