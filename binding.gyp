{
  "targets": [
    {
      "target_name": "addon",
      "sources": [ "../maze-factory/src/maze_factory.cpp" ],
      "include_dirs": [
        "<!@(node -p \"require('node-addon-api').include\")"
      ],
      "dependencies": [
        "<!(node -p \"require('node-addon-api').gyp\")"
      ],
      'defines': [ 'NAPI_DISABLE_CPP_EXCEPTIONS' ],
      "cflags_cc": ["-fexceptions", "-DNAPI_CPP_EXCEPTIONS"],
      "link_settings": {
        "libraries": []
      }
    }
  ]
}