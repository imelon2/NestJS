import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { Observable, map } from "rxjs";

@Injectable()
export class UndefinedToNullInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        // 전 부분
        // JSON은 undefinde를 읽지 못하니, undefined를 null로 전환
        return next.handle().pipe(map((data) => data === undefined ? null : data ));
    }
}