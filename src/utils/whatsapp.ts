export function generateWhatsAppMessage(data: {
  customerName: string;
  vehicle: string;
  services: { name: string; price: number; quantity: number }[];
  products: { name: string; price: number; quantity: number }[];
  total: number;
  observations: string;
}) {
  const { customerName, vehicle, services, products, total, observations } = data;
  
  let message = `*Orçamento - Auto Service Pro*\n\n`;
  message += `Cliente: ${customerName}\n`;
  message += `Veículo: ${vehicle}\n\n`;
  
  if (services.length > 0) {
    message += `*Serviços:*\n`;
    services.forEach(service => {
      message += `- ${service.name} (${service.quantity}x) - R$ ${(service.price * service.quantity).toFixed(2)}\n`;
    });
    message += '\n';
  }
  
  if (products.length > 0) {
    message += `*Peças:*\n`;
    products.forEach(product => {
      message += `- ${product.name} (${product.quantity}x) - R$ ${(product.price * product.quantity).toFixed(2)}\n`;
    });
    message += '\n';
  }
  
  if (observations) {
    message += `*Observações:*\n${observations}\n\n`;
  }
  
  message += `*Total: R$ ${total.toFixed(2)}*\n\n`;
  message += `Para aprovar este orçamento ou tirar dúvidas, por favor responda esta mensagem.`;
  
  return encodeURIComponent(message);
}