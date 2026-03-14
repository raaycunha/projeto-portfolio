const nav = document.querySelector('nav')
const i = document.createElement('i')
i.className = 'bx bx-moon bar'
i.id = 'btnDark'
i.title = 'Mudar Tema'

const temaSalvo = localStorage.getItem('theme')

if (temaSalvo === 'dark') {
    document.body.classList.add('dark-mode')
    i.className = 'bx bx-sun bar'
}

nav.appendChild(i)

const btnDark = document.querySelector('#btnDark')
btnDark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    const isDark = document.body.classList.contains('dark-mode')
    localStorage.setItem('theme', isDark ? 'dark' : 'light')

    if (isDark) i.className = 'bx bx-sun bar'
    else i.className = 'bx bx-moon bar'
})