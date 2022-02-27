Trace Execution of roll(6,6,12,20);

"state" in the Haskell server, Main.hs, appears to be defined in the "main" do block as follows:
main = do
    print "In main"
    state <- atomically $ newTVar newServerState
    Warp.runSettings
     (Warp.setPort 3055 $
       Warp.setTimeout 36000
         Warp.defaultSettings) $
           WaiWS.websocketsOr WS.defaultConnectionOptions (application state) staticApp
staticApp :: Network.Wai.Application
staticApp = Static.staticApp $ Static.embeddedSettings $(embedDir "./dist") // dist is the client app in schalk.net.

serverState is a list of clients:
type Client = (Name, Score, Goal, Group, WS.Connection, Password, Int, Comments)
type ServerState = [Client]
newServerState :: ServerState
newServerState = []

If you know a client's Name (index 0 in the associated Client in serverState), you can find the values of indeces 1 through 8. For example, you can find the Group (Client index: 3) to which Name belongs as follows:
extract :: [Text] -> Text
extract [x] = x
extract _ = mempty // If x isn't found in the list, extract returns "mempty."
getGroup name state = extract [ d | (a,_,_,d,_,_,_,_) <- state, name == a ]

AFTER LOGIN CLICK "ROLL".
client: clicks "ROLL". The roll() callback executes, sending "CA#$42,Group,Name,6,6,12,20"
server: responds with "NN#$42"
                      "CA#$42"
The Chrome log shows a live connection that dies when the "ROLL" is clicked.
di and dice are (4) [undefined, undefined, undefined, undefined] (4) [undefined, undefined, undefined, undefined]
game.svelte? [sm]:96 socket.readyState is  1  // Good news
game.svelte? [sm]:97 Entering login
game.svelte? [sm]:101 In setTimeout. e.target.value is fred  //"fred" is the user name this time.
game.svelte? [sm]:102 In setTimeout. e.data is undefined
game.svelte? [sm]:103 In setTimeout. count is 0
game.svelte? [sm]:105 xx and e.target.value are CC#$42fred fred
game.svelte? [sm]:107 In 'if readyState === 1'. xx is CC#$42fred
game.svelte? [sm]:126 e.data is  CC#$42,solo,fred ,joined
game.svelte? [sm]:128 The message is MessageEvent {isTrusted: true,

 data: 'CC#$42,solo,fred ,joined', origin: 'wss://haskellgame.schalk.site', lastEventId: '', source: null, …}isTrusted: truebubbles: falsecancelBubble:

 falsecancelable: falsecomposed: falsecurrentTarget: WebSocket {url: 'wss://haskellgame.schalk.site/', readyState: 3, bufferedAmount: 0, onopen: null, onerror: null, …}data: "CC#$42,solo,fred ,joined"defaultPrevented: falseeventPhase: 0lastEventId: ""origin: "wss://haskellgame.schalk.site"path: []ports: []returnValue: truesource: nullsrcElement: WebSocket {url: 'wss://haskellgame.schalk.site/', readyState: 3, bufferedAmount: 0, onopen: null, onerror: null, …}target: WebSocket {url: 'wss://haskellgame.schalk.site/', readyState: 3, bufferedAmount: 0, onopen: null, onerror: null, …}timeStamp: 11348.200000047684type: "message"userActivation: null[[Prototype]]: MessageEvent
game.svelte? [sm]:130 gameArray is (4) ['CC#$42', 'solo', 'fred ', 'joined']
game.svelte? [sm]:244 nums is []
game.svelte? [sm]:246 Now nums is []
game.svelte? [sm]:126 e.data is  NN#$42,solo,fred,<br>fred | score: 8888 | goals: 8888 |
game.svelte? [sm]:128 The message is MessageEvent {isTrusted: true,

 data: 'NN#$42,solo,fred,<br>fred | score: 8888 | goals: 8888 | ', origin: 'wss://haskellgame.schalk.site', lastEventId: '', source: null, …}isTrusted:

 truebubbles: falsecancelBubble: falsecancelable: falsecomposed: falsecurrentTarget: WebSocket {url: 'wss://haskellgame.schalk.site/', readyState: 3, bufferedAmount: 0, onopen: null, onerror: null, …}data: "NN#$42,solo,fred,<br>fred | score: 8888 | goals: 8888 | "defaultPrevented: falseeventPhase: 0lastEventId: ""origin: "wss://haskellgame.schalk.site"path: []ports: []returnValue: truesource: nullsrcElement: WebSocket {url: 'wss://haskellgame.schalk.site/', readyState: 3, bufferedAmount: 0, onopen: null, onerror: null, …}target: WebSocket {url: 'wss://haskellgame.schalk.site/', readyState: 3, bufferedAmount: 0, onopen: null, onerror: null, …}timeStamp: 31137.400000035763type: "message"userActivation: null[[Prototype]]: MessageEvent
game.svelte? [sm]:130 gameArray is (4) ['NN#$42', 'solo', 'fred', '<br>fred | score: 8888 | goals: 8888 | ']
game.svelte? [sm]:126 e.data is  CA#$42,solo,fred,-1,1,0,1,error in get2
game.svelte? [sm]:128 The message is MessageEvent {isTrusted: true,

 data: 'CA#$42,solo,fred,-1,1,0,1,error in get2', origin: 'wss://haskellgame.schalk.site', lastEventId: '', source: null, …}isTrusted: truebubbles:

 falsecancelBubble: falsecancelable: falsecomposed: falsecurrentTarget: WebSocket {url: 'wss://haskellgame.schalk.site/', readyState: 3, bufferedAmount: 0, onopen: null, onerror: null, …}data: "CA#$42,solo,fred,-1,1,0,1,error in get2"defaultPrevented: falseeventPhase: 0lastEventId: ""origin: "wss://haskellgame.schalk.site"path: []ports: []returnValue: truesource: nullsrcElement: WebSocket {url: 'wss://haskellgame.schalk.site/', readyState: 3, bufferedAmount: 0, onopen: null, onerror: null, …}target: WebSocket {url: 'wss://haskellgame.schalk.site/', readyState: 3, bufferedAmount: 0, onopen: null, onerror: null, …}timeStamp: 31140.5type: "message"userActivation: null[[Prototype]]: MessageEvent
game.svelte? [sm]:130 gameArray is (8) ['CA#$42', 'solo', 'fred', '-1', '1', '0', '1', 'error in get2']

SERVER LOG: Entering erin three times didn't break the connection. Clicking two numbers did.
./Monads_In_Cycle
"App is fired up"
"CC#$42erin"
"In talk. The incoming message is CA#$42,solo,erin,6,6,12,20"
"<@>"
"<@>"
"Message being broadcast: NN#$42,solo,erin,<br>erin | score: 8888 | goals: 8888 | "
NN#$42,solo,erin,<br>erin | score: 8888 | goals: 8888 |
"\"0,-1,1,-1\""
"\"error in get2\""
"Message being broadcast: CA#$42,solo,erin,0,-1,1,-1,error in get2"
CA#$42,solo,erin,0,-1,1,-1,error in get2
"In talk. The incoming message is CC#$42erin"
"<@>"
"<@>"
"*********************************************************"
"Message fell through to the bottom in Main.hs"
"CC#$42erin"
"length of ServerState: "
1
"Here are the names which are currently being served"
"erin"
"<@><#><$><#><@>"
"*********************************************************"
"In talk. The incoming message is CC#$42erin"
"<@>"
"<@>"
"*********************************************************"
"Message fell through to the bottom in Main.hs"
"CC#$42erin"
"length of ServerState: "
1
"Here are the names which are currently being served"
"erin"
"<@><#><$><#><@>"
"*********************************************************"
"erin is leaving"
"Hello Nurse"
ConnectionClosed




















 MessageEvent {isTrusted: true, data: 'NN#$42,solo,fred,<br>fred | score: 8888 | goals: 8888 | ', origin: 'wss://haskellgame.schalk.site', lastEventId: '', source: null, …}

 e.data is  CC#$42,solo,fred ,joined
 game.svelte? [sm]:128 The message is MessageEvent {isTrusted: true, data: 'CC#$42,solo,fred ,joined', origin: 'wss://haskellgame.schalk.site', lastEventId: '', source: null, …}isTrusted: truebubbles: falsecancelBubble: falsecancelable: falsecomposed: falsecurrentTarget: WebSocket {url: 'wss://haskellgame.schalk.site/', readyState: 3, bufferedAmount: 0, onopen: null, onerror: null, …}data: "CC#$42,solo,fred ,joined"defaultPrevented: falseeventPhase: 0lastEventId: ""origin: "wss://haskellgame.schalk.site"path: []ports: []returnValue: truesource: nullsrcElement: WebSocket {url: 'wss://haskellgame.schalk.site/', readyState: 3, bufferedAmount: 0, onopen: null, onerror: null, …}target: WebSocket {url: 'wss://haskellgame.schalk.site/', readyState: 3, bufferedAmount: 0, onopen: null, onerror: null, …}timeStamp: 11348.200000047684type: "message"userActivation: null[[Prototype]]: MessageEvent
 game.svelte? [sm]:130 gameArray is (4) ['CC#$42', 'solo', 'fred ', 'joined']
 game.svelte? [sm]:244 nums is []
 game.svelte? [sm]:246 Now nums is []
 game.svelte? [sm]:126 e.data is  NN#$42,solo,fred,<br>fred | score: 8888 | goals: 8888 |
 game.svelte? [sm]:128 The message is MessageEvent {isTrusted: true, data: 'NN#$42,solo,fred,<br>fred | score: 8888 | goals: 8888 | ', origin: 'wss://haskellgame.schalk.site', lastEventId: '', source: null, …}isTrusted: truebubbles: falsecancelBubble: falsecancelable: falsecomposed: falsecurrentTarget: WebSocket {url: 'wss://haskellgame.schalk.site/', readyState: 3, bufferedAmount: 0, onopen: null, onerror: null, …}data: "NN#$42,solo,fred,<br>fred | score: 8888 | goals: 8888 | "defaultPrevented: falseeventPhase: 0lastEventId: ""origin: "wss://haskellgame.schalk.site"path: []ports: []returnValue: truesource: nullsrcElement: WebSocket {url: 'wss://haskellgame.schalk.site/', readyState: 3, bufferedAmount: 0, onopen: null, onerror: null, …}target: WebSocket {url: 'wss://haskellgame.schalk.site/', readyState: 3, bufferedAmount: 0, onopen: null, onerror: null, …}timeStamp: 31137.400000035763type: "message"userActivation: null[[Prototype]]: MessageEvent
 game.svelte? [sm]:130 gameArray is (4) ['NN#$42', 'solo', 'fred', '<br>fred | score: 8888 | goals: 8888 | ']
 game.svelte? [sm]:126 e.data is  CA#$42,solo,fred,-1,1,0,1,error in get2
