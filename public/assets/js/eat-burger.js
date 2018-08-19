$( () => {
    $(".devour-btn").on("click", evt => {
        let name = evt.target.dataset.bgrName
        let updateObj = {
            burgerName: name
        }
        $.ajax("/api/devour", {
            type: "PUT",
            data: updateObj
        }).then( result => {
            console.log('Reload after update')
            location.reload()
        })
    })

    $(".create-form").on("submit", evt => {
        evt.preventDefault()
        let newBurger = {
            burgerName: $("#new-burger").val().trim()
        }
        $.ajax("/api/add", {
            type: "POST",
            data: newBurger
        }).then( result => {
            console.log('Reload after create')
            location.reload()
        })
    })
})