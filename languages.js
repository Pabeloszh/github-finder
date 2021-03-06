const languages = [
  {
    name: "Mercury",
    color: "#ff2b2b",
  },
  {
    name: "TypeScript",
    color: "#2b7489",
  },
  {
    name: "PureBasic",
    color: "#5a6986",
  },
  {
    name: "Objective-C++",
    color: "#6866fb",
  },
  {
    name: "Self",
    color: "#0579aa",
  },
  {
    name: "edn",
    color: "#db5855",
  },
  {
    name: "NewLisp",
    color: "#87AED7",
  },
  {
    name: "Jupyter Notebook",
    color: "#DA5B0B",
  },
  {
    name: "Rebol",
    color: "#358a5b",
  },
  {
    name: "Frege",
    color: "#00cafe",
  },
  {
    name: "Dart",
    color: "#00B4AB",
  },
  {
    name: "AspectJ",
    color: "#a957b0",
  },
  {
    name: "Shell",
    color: "#89e051",
  },
  {
    name: "Web Ontology Language",
    color: "#9cc9dd",
  },
  {
    name: "xBase",
    color: "#403a40",
  },
  {
    name: "Eiffel",
    color: "#946d57",
  },
  {
    name: "Nix",
    color: "#7e7eff",
  },
  {
    name: "RAML",
    color: "#77d9fb",
  },
  {
    name: "MTML",
    color: "#b7e1f4",
  },
  {
    name: "Racket",
    color: "#22228f",
  },
  {
    name: "Elixir",
    color: "#6e4a7e",
  },
  {
    name: "SAS",
    color: "#B34936",
  },
  {
    name: "Agda",
    color: "#315665",
  },
  {
    name: "wisp",
    color: "#7582D1",
  },
  {
    name: "D",
    color: "#ba595e",
  },
  {
    name: "Kotlin",
    color: "#F18E33",
  },
  {
    name: "Opal",
    color: "#f7ede0",
  },
  {
    name: "Crystal",
    color: "#776791",
  },
  {
    name: "Objective-C",
    color: "#438eff",
  },
  {
    name: "ColdFusion CFC",
    color: "#ed2cd6",
  },
  {
    name: "Oz",
    color: "#fab738",
  },
  {
    name: "Mirah",
    color: "#c7a938",
  },
  {
    name: "Objective-J",
    color: "#ff0c5a",
  },
  {
    name: "Gosu",
    color: "#82937f",
  },
  {
    name: "FreeMarker",
    color: "#0050b2",
  },
  {
    name: "Ruby",
    color: "#701516",
  },
  {
    name: "Component Pascal",
    color: "#b0ce4e",
  },
  {
    name: "Arc",
    color: "#aa2afe",
  },
  {
    name: "Brainfuck",
    color: "#2F2530",
  },
  {
    name: "Nit",
    color: "#009917",
  },
  {
    name: "APL",
    color: "#5A8164",
  },
  {
    name: "Go",
    color: "#375eab",
  },
  {
    name: "Visual Basic",
    color: "#945db7",
  },
  {
    name: "PHP",
    color: "#4F5D95",
  },
  {
    name: "Cirru",
    color: "#ccccff",
  },
  {
    name: "SQF",
    color: "#3F3F3F",
  },
  {
    name: "Glyph",
    color: "#e4cc98",
  },
  {
    name: "Java",
    color: "#b07219",
  },
  {
    name: "MAXScript",
    color: "#00a6a6",
  },
  {
    name: "Scala",
    color: "#DC322F",
  },
  {
    name: "SCSS",
    color: "#c6538c",
  },
  {
    name: "Makefile",
    color: "#427819",
  },
  {
    name: "ColdFusion",
    color: "#ed2cd6",
  },
  {
    name: "Perl",
    color: "#0298c3",
  },
  {
    name: "Python",
    color: "#3572A5",
  },
  {
    name: "Ruby",
    color: "#701516",
  },
  {
    name: "Lua",
    color: "#000080",
  },
  {
    name: "Vue",
    color: "#2c3e50",
  },
  {
    name: "Verilog",
    color: "#b2b7f8",
  },
  {
    name: "Factor",
    color: "#636746",
  },
  {
    name: "Haxe",
    color: "#df7900",
  },
  {
    name: "Pure Data",
    color: "#91de79",
  },
  {
    name: "Forth",
    color: "#341708",
  },
  {
    name: "Red",
    color: "#ee0000",
  },
  {
    name: "Hy",
    color: "#7790B2",
  },
  {
    name: "Volt",
    color: "#1F1F1F",
  },
  {
    name: "LSL",
    color: "#3d9970",
  },
  {
    name: "eC",
    color: "#913960",
  },
  {
    name: "CoffeeScript",
    color: "#244776",
  },
  {
    name: "HTML",
    color: "#e44b23",
  },
  {
    name: "Lex",
    color: "#DBCA00",
  },
  {
    name: "API Blueprint",
    color: "#2ACCA8",
  },
  {
    name: "Swift",
    color: "#ffac45",
  },
  {
    name: "C",
    color: "#555555",
  },
  {
    name: "AutoHotkey",
    color: "#6594b9",
  },
  {
    name: "Isabelle",
    color: "#FEFE00",
  },
  {
    name: "Metal",
    color: "#8f14e9",
  },
  {
    name: "Clarion",
    color: "#db901e",
  },
  {
    name: "JSONiq",
    color: "#40d47e",
  },
  {
    name: "Boo",
    color: "#d4bec1",
  },
  {
    name: "AutoIt",
    color: "#1C3552",
  },
  {
    name: "Clojure",
    color: "#db5855",
  },
  {
    name: "Rust",
    color: "#dea584",
  },
  {
    name: "Prolog",
    color: "#74283c",
  },
  {
    name: "SourcePawn",
    color: "#5c7611",
  },
  {
    name: "AMPL",
    color: "#E6EFBB",
  },
  {
    name: "FORTRAN",
    color: "#4d41b1",
  },
  {
    name: "ANTLR",
    color: "#9DC3FF",
  },
  {
    name: "Harbour",
    color: "#0e60e3",
  },
  {
    name: "Tcl",
    color: "#e4cc98",
  },
  {
    name: "BlitzMax",
    color: "#cd6400",
  },
  {
    name: "PigLatin",
    color: "#fcd7de",
  },
  {
    name: "Lasso",
    color: "#999999",
  },
  {
    name: "ECL",
    color: "#8a1267",
  },
  {
    name: "VHDL",
    color: "#adb2cb",
  },
  {
    name: "Elm",
    color: "#60B5CC",
  },
  {
    name: "Propeller Spin",
    color: "#7fa2a7",
  },
  {
    name: "X10",
    color: "#4B6BEF",
  },
  {
    name: "IDL",
    color: "#a3522f",
  },
  {
    name: "ATS",
    color: "#1ac620",
  },
  {
    name: "Ada",
    color: "#02f88c",
  },
  {
    name: "Unity3D Asset",
    color: "#ab69a1",
  },
  {
    name: "Nu",
    color: "#c9df40",
  },
  {
    name: "LFE",
    color: "#004200",
  },
  {
    name: "SuperCollider",
    color: "#46390b",
  },
  {
    name: "Oxygene",
    color: "#cdd0e3",
  },
  {
    name: "ASP",
    color: "#6a40fd",
  },
  {
    name: "Assembly",
    color: "#6E4C13",
  },
  {
    name: "Gnuplot",
    color: "#f0a9f0",
  },
  {
    name: "JFlex",
    color: "#DBCA00",
  },
  {
    name: "NetLinx",
    color: "#0aa0ff",
  },
  {
    name: "Turing",
    color: "#45f715",
  },
  {
    name: "Vala",
    color: "#fbe5cd",
  },
  {
    name: "Processing",
    color: "#0096D8",
  },
  {
    name: "Arduino",
    color: "#bd79d1",
  },
  {
    name: "FLUX",
    color: "#88ccff",
  },
  {
    name: "NetLogo",
    color: "#ff6375",
  },
  {
    name: "C Sharp",
    color: "#178600",
  },
  {
    name: "CSS",
    color: "#563d7c",
  },
  {
    name: "Emacs Lisp",
    color: "#c065db",
  },
  {
    name: "Stan",
    color: "#b2011d",
  },
  {
    name: "SaltStack",
    color: "#646464",
  },
  {
    name: "QML",
    color: "#44a51c",
  },
  {
    name: "Pike",
    color: "#005390",
  },
  {
    name: "LOLCODE",
    color: "#cc9900",
  },
  {
    name: "ooc",
    color: "#b0b77e",
  },
  {
    name: "Handlebars",
    color: "#01a9d6",
  },
  {
    name: "J",
    color: "#9EEDFF",
  },
  {
    name: "Mask",
    color: "#f97732",
  },
  {
    name: "EmberScript",
    color: "#FFF4F3",
  },
  {
    name: "TeX",
    color: "#3D6117",
  },
  {
    name: "Nemerle",
    color: "#3d3c6e",
  },
  {
    name: "KRL",
    color: "#28431f",
  },
  {
    name: "Ren'Py",
    color: "#ff7f7f",
  },
  {
    name: "Unified Parallel C",
    color: "#4e3617",
  },
  {
    name: "Golo",
    color: "#88562A",
  },
  {
    name: "Fancy",
    color: "#7b9db4",
  },
  {
    name: "OCaml",
    color: "#3be133",
  },
  {
    name: "Shen",
    color: "#120F14",
  },
  {
    name: "Pascal",
    color: "#b0ce4e",
  },
  {
    name: "F#",
    color: "#b845fc",
  },
  {
    name: "Puppet",
    color: "#302B6D",
  },
  {
    name: "ActionScript",
    color: "#882B0F",
  },
  {
    name: "Diff",
    color: "#88dddd",
  },
  {
    name: "Ragel in Ruby Host",
    color: "#9d5200",
  },
  {
    name: "Fantom",
    color: "#dbded5",
  },
  {
    name: "Zephir",
    color: "#118f9e",
  },
  {
    name: "Click",
    color: "#E4E6F3",
  },
  {
    name: "Smalltalk",
    color: "#596706",
  },
  {
    name: "DM",
    color: "#447265",
  },
  {
    name: "Ioke",
    color: "#078193",
  },
  {
    name: "PogoScript",
    color: "#d80074",
  },
  {
    name: "LiveScript",
    color: "#499886",
  },
  {
    name: "JavaScript",
    color: "#f1e05a",
  },
  {
    name: "VimL",
    color: "#199f4b",
  },
  {
    name: "PureScript",
    color: "#1D222D",
  },
  {
    name: "ABAP",
    color: "#E8274B",
  },
  {
    name: "Matlab",
    color: "#bb92ac",
  },
  {
    name: "Slash",
    color: "#007eff",
  },
  {
    name: "R",
    color: "#198ce7",
  },
  {
    name: "Erlang",
    color: "#B83998",
  },
  {
    name: "Pan",
    color: "#cc0000",
  },
  {
    name: "LookML",
    color: "#652B81",
  },
  {
    name: "Eagle",
    color: "#814C05",
  },
  {
    name: "Scheme",
    color: "#1e4aec",
  },
  {
    name: "PLSQL",
    color: "#dad8d8",
  },
  {
    name: "Python",
    color: "#3572A5",
  },
  {
    name: "Max",
    color: "#c4a79c",
  },
  {
    name: "Common Lisp",
    color: "#3fb68b",
  },
  {
    name: "Latte",
    color: "#A8FF97",
  },
  {
    name: "XQuery",
    color: "#5232e7",
  },
  {
    name: "Omgrofl",
    color: "#cabbff",
  },
  {
    name: "XC",
    color: "#99DA07",
  },
  {
    name: "Nimrod",
    color: "#37775b",
  },
  {
    name: "SystemVerilog",
    color: "#DAE1C2",
  },
  {
    name: "Chapel",
    color: "#8dc63f",
  },
  {
    name: "Groovy",
    color: "#e69f56",
  },
  {
    name: "Dylan",
    color: "#6c616e",
  },
  {
    name: "E",
    color: "#ccce35",
  },
  {
    name: "Parrot",
    color: "#f3ca0a",
  },
  {
    name: "Grammatical Framework",
    color: "#79aa7a",
  },
  {
    name: "Game Maker Language",
    color: "#8fb200",
  },
  {
    name: "Papyrus",
    color: "#6600cc",
  },
  {
    name: "NetLinx+ERB",
    color: "#747faa",
  },
  {
    name: "Clean",
    color: "#3F85AF",
  },
  {
    name: "Alloy",
    color: "#64C800",
  },
  {
    name: "Squirrel",
    color: "#800000",
  },
  {
    name: "PAWN",
    color: "#dbb284",
  },
  {
    name: "UnrealScript",
    color: "#a54c4d",
  },
  {
    name: "Standard ML",
    color: "#dc566d",
  },
  {
    name: "Slim",
    color: "#ff8f77",
  },
  {
    name: "Perl6",
    color: "#0000fb",
  },
  {
    name: "Julia",
    color: "#a270ba",
  },
  {
    name: "Haskell",
    color: "#29b544",
  },
  {
    name: "NCL",
    color: "#28431f",
  },
  {
    name: "Io",
    color: "#a9188d",
  },
  {
    name: "Rouge",
    color: "#cc0088",
  },
  {
    name: "cpp",
    color: "#f34b7d",
  },
  {
    name: "AGS Script",
    color: "#B9D9FF",
  },
  {
    name: "Dogescript",
    color: "#cca760",
  },
  {
    name: "nesC",
    color: "#94B0C7",
  },
];
