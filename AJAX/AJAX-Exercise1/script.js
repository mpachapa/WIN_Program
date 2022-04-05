// Get for Posts API 

// Button 1
$('#button1').on('click', function() {
    //Clear div1 
    $('#div1').text('')

    //Get Posts from Server
    $.get('https://jsonplaceholder.typicode.com/posts' , function(posts) {
        posts.forEach( post => {
            //Turn Object into string
            let postText = JSON.stringify(post)
            let p = $('<p></p>');
            p.text(postText);
            $('#div1').append(p);
        });
        console.log(posts)
    })
})

// Button 2
$('#button2').on('click', function() {
    //Clear div1 
    $('#div1').text('')
    
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/10' , function(post) {
        let postText = JSON.stringify(post)
        let p = $('<p></p>');
        p.text(postText);
        $('#div1').append(p);
        console.log('Gotten post with ID 10')
    })
})

// Button 3
$('#button3').on('click', function() {
    //Clear div1 
    $('#div1').text('')
    
    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/comments', {id: 12} , function(posts) {
    posts.forEach(post => {
        let postText = JSON.stringify(post)
        let p = $('<p></p>');
        p.text(postText);
        $('#div1').append(p);
        console.log('Gotten Comments from ID 12')
    })
    
    })
})

// Button 4
$('#button4').on('click', function() {
    //Clear div1 
    $('#div1').text('')

    $.get('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', {userID: 2} , function(post) {
        let postText = JSON.stringify(post)
        let p = $('<p></p>');
        p.text(postText);
        $('#div1').append(p);
        console.log('Gotten post from ID 2')
    })
})

// Button 5
$('#button5').on('click', function() {
    //Clear div1 
    $('#div1').text('')
    
    $.post('https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts', {
        userID: 1,
        title: "This is a title",
        body: 'This is a new post'
    },
    function(post) {
        let p = $('<p></p>');
        p.text(post.id);
        $('#div1').append(p);
        console.log(post, 'post has been created')
    })
})

// Button 6
$('#button6').on('click', function() {
    //Clear div1 
    $('#div1').text('')
    
    $.ajax( {
        method: 'PUT',
        url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12',
        data: { 
            userID: 1,
            title: "New Post",
            body: 'New Post added'
        },
        complete: function(response) {
            console.log(response.responseJSON)
        }

    })
})

// Button 7
$('#button7').on('click', function() {
    //Clear div1 
    $('#div1').text('')
    
    $.ajax( {
        method: 'PUT',
        url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12',
        data: { 
            title: "Look Ma! Its changed!"
        },
        complete: function(response) {
            console.log(response.responseJSON)
        }

    })
})

// Button 8
$('#button8').on('click', function() {
    //Clear div1 
    $('#div1').text('')
    
    $.ajax( {
        method: 'DELETE',
        url: 'https://my-json-server.typicode.com/zachhall/WIN2020_AjaxPromises/posts/12',
        complete: function(response) {
            console.log(response.responseJSON)
        }
    })
})