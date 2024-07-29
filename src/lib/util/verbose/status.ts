import type { OrderStatusType } from "$lib/types/yandex"

export const getStatusDescription = (status: OrderStatusType) => {
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
