// constants
const list = document.querySelector('#list')
const showPanel = document.querySelector('#show-panel')
// Helper function

function addBookToList(data){
        const li = document.createElement('li')
        li.textContent = data.title
        list.append(li)
        
        
        li.addEventListener("click", handleShow)
        // li.addEventListener('', handleLeave)
        
        // function handleLeave(){
            // showPanel.display = 'none'
            // }
            // 
            // showPanel = ''
            
            async function handleShow(){
                // setTimeout(handleShow(),{
                    showPanel.innerHTML = " "
                const bookThumb = document.createElement('img')
                bookThumb.src = data.img_url
                showPanel.append(bookThumb)
                
                const bookTitle = document.createElement('h3')
                bookTitle.textContent = data.title
                showPanel.append(bookTitle)

                const bookSubtitles = document.createElement('h3')
                bookSubtitles.textContent = data.subtitle
                showPanel.append(bookSubtitles)
                
                const bookAuthors = document.createElement('h3')
                bookAuthors.textContent = `by ${data.author}`
                showPanel.append(bookAuthors)
                
                const bookDescription = document.createElement('p')
                bookDescription.textContent = data.description 
                showPanel.append(bookDescription)

                
let i = 0
                data.users.forEach(addUsers)
                function addUsers(){
                    if (i < data.users.length ) {
                const bookUsers = document.createElement('li')
                bookUsers.textContent = data.users[i].username
                // console.log(data.users[0])
                showPanel.append(bookUsers)    
                i++
                }
            }

                const likeButton = document.createElement("button")
                likeButton.textContent = "Like"
                showPanel.append(likeButton)


                // console.log(data.users[0])
                
                
                // function addUsers(){
                    //     const lover = document.createElement('li')
                    //     lover.textContent = data.users
                    //     showPanel.append(lover)
                    
                    // }
                    
                    // // data.users.forEach(user => {
                        
                        // });
                //  async function bookLoverlist() {
                //             const response = await fetch('http://localhost:3000/books')
                //             const data = response.json()
                //             console.log('data:', users)
                            
                //             data.users.forEach(addUsers)

                    
                // }
                // function addUsers(lover){
                //     const bookLovers = document.createElement('li')
                //     bookLovers.textContent = data.users.username
                //     // console.log(data.username)
                //     showPanel.append(bookLovers)
                
                

                // }
                // addUsers()

            }
        }
        
        //Fetch requests
        async function getBooks(){
            const response = await fetch('http://localhost:3000/books')
            const data = await response.json()
            console.log(data)
            
            data.forEach(addBookToList)

        }
        getBooks()
        
        document.addEventListener("DOMContentLoaded", function() {});
        
        // await setTimeout(refresh =>{
        // location.reload()
        // },10)