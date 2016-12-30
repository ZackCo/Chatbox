window.onload = function () {
    "use strict";
    
    var chatboxMessage = document.createElement("div");
    chatboxMessage.classList.add("chatbox-message");
    var chatboxMessageContainer = document.createElement("div");
    chatboxMessageContainer.classList.add("chatbox-message-container");
    var ChatboxUser = {LOCAL: "local",
                       REMOTE: "remote"};
    
    function createMessage(message, origin) {
        var newMessage = chatboxMessage.cloneNode();
        var newContainer = chatboxMessageContainer.cloneNode();
        newMessage.appendChild(document.createTextNode(message));
        newMessage.classList.add("chatbox-origin-" + origin);
        newContainer.classList.add("chatbox-origin-" + origin);
        newContainer.appendChild(newMessage);
        return newContainer;
    }
    
    var chatbox = document.getElementById("chatbox");
    var chatboxContent = document.getElementById("chatbox-content");
    var chatboxInput = document.getElementById("chatbox-input");
    
    var chatboxExpanded = true;
    
    function minimize() {
        chatbox.style.animation = "hide 2s";
        chatbox.style.height = "3em";
        chatboxContent.style.display = "none";
        chatboxInput.style.display = "none";
        chatboxExpanded = false;
    }
    
    function maximize() {
        chatbox.style.animation = "show 2s";
        chatbox.style.height = "20em";
        setTimeout(function () {
            chatboxContent.style.display = "flex";
            chatboxInput.style.display = "block";
            chatboxExpanded = true;
        }, 2000);
    }

    
    chatboxInput.addEventListener("keydown", function (e) {
        e.preventDefault;
        if (e.keyCode === 13 && chatboxInput.value !== "") {

            chatboxContent.insertBefore(createMessage(chatboxInput.value, ChatboxUser.LOCAL),
                                        chatboxContent.firstChild);
            chatboxInput.value = "";
        }
    });
    
    var chatboxHeader = document.getElementById("chatbox-header-bar");
    
    chatboxHeader.addEventListener("click", function (e) {
        if(chatboxExpanded)
            minimize();
        else
            maximize();
    });

    setTimeout(function() {
        document.getElementById("chatbox-content").appendChild(
                createMessage("Hello, welcome to this chatbox!", ChatboxUser.REMOTE));
    }, 2000);
};