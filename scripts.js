// Obtendo elementos do formulário.
const form = document.querySelector("form")
const amount = document.getElementById("amount")
const currency = document.getElementById("currency")

// Manipulando o input amount para receber somente números.
amount.addEventListener("input", () => {
	const hasCharactersRegex = /\D+/g
	amount.value = amount.value.replace(hasCharactersRegex, "")
})

// Capturando evento de submit do formulário.
form.onsubmit = (event) => {
	event.preventDefault()


}