document.querySelector('.second').addEventListener('click', e=> {
    e.preventDefault()
    alert('click')
    e.target.classList.add('hidden')
})