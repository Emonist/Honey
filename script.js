document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = encodeURIComponent(e.target.name.value);
  const address = encodeURIComponent(e.target.address.value);
  const phone = encodeURIComponent(e.target.phone.value);
  const product = encodeURIComponent(e.target.product.value);
  const notes = encodeURIComponent(e.target.notes.value || "None");

  const message = `Hi Honey Dazzle 🌸

I'd like to place an order:

👤 Name: ${name}
📞 Phone: ${phone}
🏠 Address: ${address}
📦 Product(s): ${product}
📝 Notes: ${notes}

I’ll send my payment screenshot here.`;

  const waLink = `https://wa.me/919820087477?text=${message}`;
  window.location.href = waLink;
});
