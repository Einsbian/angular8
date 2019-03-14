import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
@Injectable({
  providedIn: 'root'
})
// class MySwPush {
//   messages: Observable<object>
//   notificationClicks: Observable<{...}
//   subscription: Observable<PushSubscription | null>
//   isEnabled: boolean
//   requestSubscription(options: { serverPublicKey: string; }): Promise<PushSubscription>
//   unsubscribe(): Promise<void>
// }
export class SwPushService {
  enterKey: any = null
  constructor(swPush: SwPush) {
    let pbKey = `BEl62iUYgUivxIkv69yViEuiBIa-Ib9-SkvMeAtA3LFgDzkrxZJjSgSnfckjBJuBkr3qBUYIHBQFLXYp5Nksh8U`
    swPush.requestSubscription({ serverPublicKey: pbKey })
    swPush.notificationClicks.subscribe(res=>{
      console.log('confirm to receive notification',res)
    })
    swPush.subscription.subscribe(res=>{
      console.log('subscrip',res && res.toJSON())
      this.enterKey = res && res.toJSON()
    })
    swPush.messages.subscribe(res=>{
      console.log('have new messages',res)
      alert(res[`title`])
      // console.log('have new messages',res)
    })
    
  }
}
