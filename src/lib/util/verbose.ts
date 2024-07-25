import { type OrderStatusType } from "$lib/types/yandex";
import { type LightItem } from "$lib/types/model";

const getStatusDescription = (status: OrderStatusType) => {
    switch(status) {
        case 'CANCELLED': return 'отменен'
        case 'DELIVERED': return 'получен покупателем'
        case 'DELIVERY': return 'передан в службу доставки'
        case 'PICKUP': return 'доставлен в пункт самовывоза'
        case 'PROCESSING': return 'находится в обработке'
        case 'PENDING': return 'ожидает обработки со стороны продавца'
        case 'UNPAID': return 'оформлен, но еще не оплачен'
        case 'PLACING': return 'оформляется, подготовка к резервированию'
        case 'RESERVED': return 'зарезервирован (недооформлен)'
        case 'PARTIALLY_RETURNED': return 'возвращен частично'
        case 'RETURNED': return 'возвращен полностью'
        default: return `не определен (${status})`
    }
}

export const getMessageFromOrder = (orderId: number, status: OrderStatusType, suffix?: {buyerTotal: number, items: LightItem[], withPrice?: boolean}) => {
    let message = `Заказ ${orderId} ${getStatusDescription(status)}.`
    if(!suffix) return message
    const { buyerTotal, items, withPrice } = suffix
    const stuff = items.map(({offerId, count}) => `${offerId} (${count})`).join(', ')
    message = `${message} Состав: ${stuff}.` 
    if(withPrice) message += ` Сумма: ${buyerTotal}  ₽.`
    return message
}
