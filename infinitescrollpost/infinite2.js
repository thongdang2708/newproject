let filter = document.getElementById('filter');
let post_container = document.querySelector('.post-container');
let loader = document.querySelector('.loader');

let page = 1;
let limit = 5;


fetchPost();
async function fetchPost() {

    let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`);

    let data = await res.json();

    data.forEach(infor => {
        let post = document.createElement('div');
        post.classList.add('post');
        post.innerHTML = `
        <div class="number-box">
                <span class="number"> ${infor.id} </span>
        </div>

        <div class="post-info">
                <h2 class="post-title"> ${infor.title} </h2>
                <p class="post-body"> ${infor.body}</p>
        </div>
        `;

        post_container.appendChild(post);
    })
};

window.addEventListener('scroll', () => {

    let { scrollHeight, scrollTop, clientHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight - 5) {
        showLoading();
    }
});

function showLoading() {

    loader.classList.add('show');

    setTimeout(() => {
        loader.classList.remove('show');

        setTimeout(() => {
            page++;
            fetchPost();
        }, 300);
    }, 1000)
};

filter.addEventListener('keyup', (ed) => {

    let text = ed.target.value.trim().toLowerCase();

    let posts = document.querySelectorAll('.post');

    posts.forEach(post => {
        let title = post.querySelector('.post-title').innerText.toLowerCase();
        let body = post.querySelector('.post-body').innerText.toLowerCase();

        if (title.indexOf(text) > -1 || body.indexOf(text) > -1) {
            post.style.display = 'flex';
        } else {
            post.style.display = 'none';
        }
    })
})