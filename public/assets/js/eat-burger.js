$( () => {
    $(".devour-btn").on("click", evt => {
        let name = evt.target.dataset.bgrName
        let updateObj = {
            burgerName: name
        }
        $.ajax("/api/devour", {
            type: "PUT",
            data: updateObj
        }).then( () => {
            location.reload()
        })
    })

    $(".create-form").on("submit", evt => {
        let newBurger = {
            burgerName: $("#new-burger").val().trim()
        }
        $.ajax("/api/add", {
            type: "POST",
            data: newBurger
        }).then( () => {
            location.reload()
        })
    })
})