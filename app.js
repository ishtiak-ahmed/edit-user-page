const table = document.getElementById('user-table')
table.addEventListener('click', e => {
    const firstParent = e.target.parentNode
    if (firstParent.className === 'edit-btn') {
        const childList = firstParent.parentNode.parentNode.children
        const name = childList[0].textContent
        const email = childList[1].textContent
        const phone = childList[2].textContent
        const role = childList[6].textContent
        document.getElementById('nameField').value = name
        document.getElementById('emailField').value = email
        document.getElementById('phone').value = phone
        document.getElementById('role').value = role
    }
})