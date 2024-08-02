import { DELIVERY_NOTIFICATION_TIMEOUT_IN_MINUTES, API_PROD_SERVER, CHAT_PREFIX } from '$env/static/private'

const urlPrefix = `${API_PROD_SERVER}/order`

export const getActivationMessage = (orderId: number, ok: boolean, tooLate: boolean = false) => {
    if(ok) return `✔️ Яндекс-маркет принял коды активации для заказа [${orderId}](${urlPrefix}/${orderId}). Ожидайте сообщения о доставке. `

    if(tooLate) return `❌ Не удалось отправить автоматически коды активации Яндекс-маркету. ` +
        `Открыт [чат](${CHAT_PREFIX}/${orderId}) для обработки [заказа ${orderId}](${urlPrefix}/${orderId}) в ручном режиме.`

    return `♨️ В заказе [${orderId}](${urlPrefix}/${orderId}) недостаточно кодов активации. ` +
        `Перейдите по ссылке и добавьте в ручном режиме в течение ${DELIVERY_NOTIFICATION_TIMEOUT_IN_MINUTES} минут.`
}
