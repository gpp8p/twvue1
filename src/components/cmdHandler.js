import { ref } from "vue";

export function getHandleCmd(){
    const handleCmd = function(args){
        console.log('handleCmd-', name, args);
        debugger;
        if(name==args[2] || args[2]=='*') {
            if(typeof(funcs[args[0]])!='undefined'){
                console.log('Found func-', args[1]);
                funcs[args[0]](args);
            }else{
                passCmdDown(args);
            }
        }else{
            passCmdDown(args);
        }
    }
    const passCmdDown = function(args){
        var availableHandlers = Object.keys(cmdHandlers);
        if(availableHandlers.length>0){
            for(var a=0;a<availableHandlers.length;a++){
//                debugger;
                cmdHandlers[availableHandlers[a]]([args[0], args[1], args[2]]);
            }
        }
    }
    return {handleCmd};
}
