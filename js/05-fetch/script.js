let currentPage = 1
let hasMoreData = true

function extractPosts(posts) {
    const postsList = document.getElementById('posts-list')
    for (var i = 0; i < posts.length; i++) {
        console.log(posts)
        const post = document.createElement('div')
        post.setAttribute('class', 'post position-relative')
        post.innerHTML = `
        <div class='thumbnail'>
            <img src="${posts[i].thumbnail}" />
        </div>
        <div class='postMeta text-center'>
            <h3 class='mb-3'>
                <a href="/blog/${posts[i].slug}">
                    <span>${posts[i].title}</span>
                </a>
            </h3>
            <p class='text-small mb-3'>${posts[i].excerpt}</p>
            <ul class='postDetails'>
                <li>
                    <i class="bi bi-eye"></i> ${posts[i].views}
                </li>
                <li>
                    <i class="bi bi-calendar-event"></i> ${posts[i].date}
                </li>
                <li>
                    <i class="bi bi-tags"></i> ${posts[i].tags.join(' | ')}
                </li>
            </ul>
        </div>
        `;

        postsList.appendChild(post)
    }
}

function loading(show) {
    const loading = document.getElementById('loading')
    if (show) {
        loading.style.display = 'flex'
    } else {
        loading.style.display = 'none'
    }
}

function loadMore()
{
    if (hasMoreData) {
        currentPage = currentPage + 1
        fetchPosts()
    } else {
        alert('Sorry! no more posts')
    }
}

function fetchPosts() {
    loading(true)
    fetch(`https://wp-course.site/wp-json/youthink/posts?page=${currentPage}`)
        .then(function (response) {
            response.json()
                .then(function (jsonText) {
                    loading(false)
                    if (currentPage * jsonText.meta.posts_per_page > jsonText.meta.total_posts) {
                        // we reached the last page
                        hasMoreData = false
                    }
                    extractPosts(jsonText.data)
                })
        }).catch(function (e) {
            console.log(e)
        })
}

fetchPosts()