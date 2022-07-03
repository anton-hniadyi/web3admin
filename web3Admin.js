module.exports = {
    extend: function(web3) {

        // ADMIN
        web3.extend({
            property: 'admin',
            methods:
            [
                new web3.extend.Method({
                    name: 'addPeer',
                    call: 'admin_addPeer',
                    params: 1,
                    inputFormatter: [web3.extend.utils.formatInputString],
                    outputFormatter: web3.extend.formatters.formatOutputBool
                }),
                new web3.extend.Method({
                    name: 'addTrustedPeer',
                    call: 'admin_addTrustedPeer',
                    params: 1,
                    inputFormatter: [web3.extend.utils.formatInputString],
                    outputFormatter: web3.extend.formatters.formatOutputBool
                }),
                new web3.extend.Method({
                    name: 'removePeer',
                    call: 'admin_removePeer',
                    params: 1,
                    inputFormatter: [web3.extend.utils.formatInputString],
                    outputFormatter: web3.extend.formatters.formatOutputBool
                }),
                new web3.extend.Method({
                    name: 'removeTrustedPeer',
                    call: 'admin_removeTrustedPeer',
                    params: 1,
                    inputFormatter: [web3.extend.utils.formatInputString],
                    outputFormatter: web3.extend.formatters.formatOutputBool
                }),
                new web3.extend.Method({
                    name: 'exportChain',
                    call: 'admin_exportChain',
                    params: 1,
                    inputFormatter: [null],
                    outputFormatter: function(obj) { return obj; }
                }),
                new web3.extend.Method({
                    name: 'importChain',
                    call: 'admin_importChain',
                    params: 1,
                    inputFormatter: [null],
                    outputFormatter: function(obj) { return obj; }
                }),
                new web3.extend.Method({
                    name: 'verbosity',
                    call: 'admin_verbosity',
                    params: 1,
                    inputFormatter: [web3.extend.utils.formatInputInt],
                    outputFormatter: web3.extend.formatters.formatOutputBool
                }),
                new web3.extend.Method({
                    name: 'setSolc',
                    call: 'admin_setSolc',
                    params: 1,
                    inputFormatter: [null],
                    outputFormatter: web3.extend.formatters.formatOutputString
                }),
                new web3.extend.Method({
                    name: 'startRPC',
                    call: 'admin_startRPC',
                    params: 4,
                    inputFormatter: [null,web3.extend.utils.formatInputInteger,null,null],
                    outputFormatter: web3.extend.formatters.formatOutputBool
                }),
                new web3.extend.Method({
                    name: 'stopRPC',
                    call: 'admin_stopRPC',
                    params: 0,
                    inputFormatter: [],
                    outputFormatter: web3.extend.formatters.formatOutputBool
                }),
                new web3.extend.Method({
                    name: 'nodeInfo',
                    call: 'admin_nodeInfo',
                    outputFormatter: web3.extend.formatters.formatOutputString
                }),
                new web3.extend.Method({
                    name: 'peers',
                    call: 'admin_peers',
                    outputFormatter: function(obj) { return obj; }
                }),
                new web3.extend.Method({
                    name: 'datadir',
                    call: 'admin_datadir',
                    outputFormatter: web3.extend.formatters.formatOutputString
                }),
                new web3.extend.Method({
                    name: 'chainSyncStatus',
                    call: 'admin_chainSyncStatus',
                    outputFormatter: function(obj) { return obj; }
                })
            ]
        });

        // DEBUG
        web3.extend({
            property: 'debug',
            methods:
            [
                new web3.extend.Method({
                    name: 'printBlock',
                    call: 'debug_printBlock',
                    params: 1,
                    inputFormatter: [web3.extend.formatters.formatInputInt],
                    outputFormatter: web3.extend.formatters.formatOutputString
                }),
                new web3.extend.Method({
                    name: 'getBlockRlp',
                    call: 'debug_getBlockRlp',
                    params: 1,
                    inputFormatter: [web3.extend.formatters.formatInputInt],
                    outputFormatter: web3.extend.formatters.formatOutputString
                }),
                new web3.extend.Method({
                    name: 'setHead',
                    call: 'debug_setHead',
                    params: 1,
                    inputFormatter: [web3.extend.formatters.formatInputInt],
                    outputFormatter: web3.extend.formatters.formatOutputBool
                }),
                new web3.extend.Method({
                    name: 'processBlock',
                    call: 'debug_processBlock',
                    params: 1,
                    inputFormatter: [web3.extend.formatters.formatInputInt],
                    outputFormatter: function(obj) { return obj; }
                }),
                new web3.extend.Method({
                    name: 'seedHash',
                    call: 'debug_seedHash',
                    params: 1,
                    inputFormatter: [web3.extend.formatters.formatInputInt],
                    outputFormatter: web3.extend.formatters.formatOutputString
                })      ,
                new web3.extend.Method({
                    name: 'dumpBlock',
                    call: 'debug_dumpBlock',
                    params: 1,
                    inputFormatter: [web3.extend.formatters.formatInputInt],
                    outputFormatter: function(obj) { return obj; }
                })
            ]
        });

        // MINER
        web3.extend({
            property: 'miner',
            methods:
            [
                new web3.extend.Method({
                    name: 'start',
                    call: 'miner_start',
                    params: 1,
                    inputFormatter: [web3.extend.formatters.formatInputInt],
                    outputFormatter: web3.extend.formatters.formatOutputBool
                }),
                new web3.extend.Method({
                    name: 'stop',
                    call: 'miner_stop',
                    params: 1,
                    inputFormatter: [web3.extend.formatters.formatInputInt],
                    outputFormatter: web3.extend.formatters.formatOutputBool
                }),
                new web3.extend.Method({
                    name: 'setExtra',
                    call: 'miner_setExtra',
                    params: 1,
                    inputFormatter: [web3.extend.utils.formatInputString],
                    outputFormatter: web3.extend.formatters.formatOutputBool
                }),
                new web3.extend.Method({
                    name: 'setGasPrice',
                    call: 'miner_setGasPrice',
                    params: 1,
                    inputFormatter: [web3.extend.utils.formatInputString],
                    outputFormatter: web3.extend.formatters.formatOutputBool
                }),
                new web3.extend.Method({
                    name: 'startAutoDAG',
                    call: 'miner_startAutoDAG',
                    params: 0,
                    inputFormatter: [],
                    outputFormatter: web3.extend.formatters.formatOutputBool
                }),
                new web3.extend.Method({
                    name: 'stopAutoDAG',
                    call: 'miner_stopAutoDAG',
                    params: 0,
                    inputFormatter: [],
                    outputFormatter: web3.extend.formatters.formatOutputBool
                }),
                new web3.extend.Method({
                    name: 'makeDAG',
                    call: 'miner_makeDAG',
                    params: 1,
                    inputFormatter: [web3.extend.formatters.inputDefaultBlockNumberFormatter],
                    outputFormatter: web3.extend.formatters.formatOutputBool
                }),
                new web3.extend.Method({
                    name: 'hashrate',
                    call: 'miner_hashrate',
                    outputFormatter: web3.extend.utils.toDecimal
                })
            ]
        });

        // NETWORK
        web3.extend({
            property: 'network',
            methods:
            [
                new web3.extend.Method({
                    name: 'getPeerCount',
                    call: 'net_peerCount',
                    params: 0,
                    inputFormatter: [],
                    outputFormatter: web3.extend.formatters.formatOutputString
                }),
                new web3.extend.Method({
                    name: 'listening',
                    call: 'net_listening',
                    outputFormatter: web3.extend.formatters.formatOutputBool
                }),
                new web3.extend.Method({
                    name: 'peerCount',
                    call: 'net_peerCount',
                    outputFormatter: web3.extend.utils.toDecimal
                }),
                new web3.extend.Method({
                    name: 'peers',
                    call: 'net_peers',
                    outputFormatter: function(obj) { return obj; }
                }),
                new web3.extend.Method({
                    name: 'version',
                    call: 'net_version',
                    outputFormatter: web3.extend.formatters.formatOutputString
                })
            ]
        });

        // TX POOL
        web3.extend({
            property: 'txpool',
            methods:
            [
                new web3.extend.Method({
                    name: 'status',
                    call: 'txpool_status',
                    outputFormatter: function(obj) { return obj; }
                })
            ]
        });
    }
};