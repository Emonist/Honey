document.getElementById("orderForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = encodeURIComponent(e.target.name.value);
  const address = encodeURIComponent(e.target.address.value);
  const phone = encodeURIComponent(e.target.phone.value);
  const product = encodeURIComponent(e.target.product.value);
  const notes = encodeURIComponent(e.target.notes.value || "None");

  const message = `Hi Honey Dazzle 🌸

I'd like to place an order:

👤 Name: ${decodeURIComponent(name)}
📞 Phone: ${decodeURIComponent(phone)}
🏠 Address: ${decodeURIComponent(address)}
💵 Txid: ${decodeURIComponent(transactionid)}
📦 Product(s): ${decodeURIComponent(product)}
📝 Notes: ${decodeURIComponent(notes)}

I’ll send my payment screenshot here.`;

  const waLink = `https://wa.me/919820087477?text=${encodeURIComponent(message)}`;
  window.location.href = waLink;
});
