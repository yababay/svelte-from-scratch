import { type OrderStatusType } from "$lib/types/yandex";
import { type LightItem } from "$lib/types/model";
import { getStatusDescription } from "./status";
import { DELIVERY_NOTIFICATION_TIMEOUT_IN_MINUTES, DELIVERY_NOTIFICATION_LIMIT_IN_MINUTES, API_PROD_SERVER } from '$env/static/private'
import DELIVERY_INSTRUCTION from './instructions/DELIVERY.md?raw'
import ACTIVATION_INSTRUCTION from './instructions/ACTIVATION.md?raw'
import HOLIDAY_INSTRUCTION from './instructions/ACTIVATION.md?raw'

const DELIVERY_WARNING_SIGN = '♨️'
const orderUrlPrefix = `${API_PROD_SERVER}/order`

export const NOTA_BENE = 'ОБРАТИТЕ ВНИМАНИЕ:'

export const seeAbove = '(Инструкцию по активации см. выше).'

export const yandexDeliveryMessageOK = (orderId: number) =>
    `✔️ Яндекс-маркет принял коды активауии для заказа ${orderId}. Ожидайте сообщения о доставке. `

export const yandexDeliveryMessageError = (status: number, statusText: string) =>
    `❌ При отправке кодов активации произошла ошибка ${status}. Сообщение от Яндекс-маркета: _${statusText}_.`

export { ACTIVATION_INSTRUCTION as activationInstruction, HOLIDAY_INSTRUCTION as holidayInstruction }

export const deliveryManual = (id: number) => ` ${DELIVERY_WARNING_SIGN} Не все коды найдены автоматически. [Добавить вручную](${orderUrlPrefix}/${id}).`

export const deliveryWarning = (id: number, offers: string) => `${DELIVERY_WARNING_SIGN} В заказ ${id} [нужно добавить коды](${orderUrlPrefix}/${id}): ${offers}.`

export const deliveryMessage = () => `\n\n${DELIVERY_INSTRUCTION}`
    .replace('DELIVERY_TIMEOUT', DELIVERY_NOTIFICATION_TIMEOUT_IN_MINUTES)
    .replace('DELIVERY_LIMIT', DELIVERY_NOTIFICATION_LIMIT_IN_MINUTES)

export const getMessageFromOrder = (orderId: number, status: OrderStatusType, suffix?: {buyerTotal: number, items: LightItem[], withPrice?: boolean}) => {
    let message = `Заказ ${orderId} ${getStatusDescription(status)}.`
    if(!suffix) return message
    const { buyerTotal, items, withPrice } = suffix
    const stuff = items.map(({offerId, count}) => `${offerId} (${count})`).join(', ')
    message = `${message} Состав: ${stuff}.`
    if(withPrice) message += ` Сумма: ${buyerTotal}  ₽.`
    return message
}
