import { type OrderStatusType } from "$lib/types/yandex";
import { type LightItem } from "$lib/types/model";
import { getStatusDescription } from "./status";
import ACTIVATION_INSTRUCTION from './instructions/ACTIVATION.md?raw'
import HOLIDAY_INSTRUCTION from './instructions/ACTIVATION.md?raw'

export const NOTA_BENE = 'ОБРАТИТЕ ВНИМАНИЕ:'

export const seeAbove = '(Инструкцию по активации см. выше).'

export { ACTIVATION_INSTRUCTION as activationInstruction, HOLIDAY_INSTRUCTION as holidayInstruction }

export const getMessageFromOrder = (orderId: number, status: OrderStatusType, suffix?: {buyerTotal: number, items: LightItem[], withPrice?: boolean}) => {
    let message = `Заказ ${orderId} ${getStatusDescription(status)}.`
    if(!suffix) return message
    const { buyerTotal, items, withPrice } = suffix
    const stuff = items.map(({offerId, count}) => `${offerId} (${count})`).join(', ')
    message = `${message} Состав: ${stuff}.`
    if(withPrice) message += ` Сумма: ${buyerTotal}  ₽.`
    return message
}
