const table = document.getElementById('user-table')
table.addEventListener('click', e => {
    const firstParent = e.target.parentNode
    if (firstParent.className === 'edit-btn') {
        const name = firstParent.parentNode.parentNode.children[0].textContent
        const email = firstParent.parentNode.parentNode.children[1].textContent
        const phone = firstParent.parentNode.parentNode.children[2].textContent
        const role = firstParent.parentNode.parentNode.children[6].textContent
        document.getElementById('nameField').value = name
        document.getElementById('emailField').value = email
        document.getElementById('phone').value = phone
        document.getElementById('role').value = role
    }
})