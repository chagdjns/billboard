# billboard
MADLIBS！<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style1.css" />
    <title>Mad Libs Game</title>
</head>
<body>
    <div class="container" id="p1">
        <h1>Are you tired of...</h1>
        <div class="form-group">
            <label for="adjective">Choose an Adjective:</label>
            <select id="adjective">
                <option value="stinky">Stinky</option>
                <option value="hot">Hot</option>
                <option value="wet">Wet</option>
                <option value="angry">Angry</option>
            </select>
        </div>

        <div class="form-group">
            <label for="noun">Choose a Noun:</label>
            <select id="noun">
                <option value="marshmallows">Marshmallows</option>
                <option value="tacos">Tacos</option>
                <option value="pillows">Pillows</option>
                <option value="bananas">Bananas</option>
            </select>
        </div>

        <button onclick="generateSentence()">Generate</button>
        <div class="red-cross">✖</div>
    </div>

    <!-- 用于第一个游戏结果 -->
    <div id="result"></div>

    <!-- 用于第二个游戏，默认隐藏 -->
    <div class="container" id="p2" style="display: none;">
        <h1>Simply...</h1>
        <div class="form-group">
            <label for="verb">Choose a Verb:</label>
            <select id="verb">
                <option value="burn">Burn</option>
                <option value="eat">Eat</option>
                <option value="cook">Cook</option>
            </select>
        </div>
        <div class="form-group">
            <label for="adjective2">Choose an Adjective:</label>
            <select id="adjective2">
                <option value="cute">Cute</option>
                <option value="dancing">Dancing</option>
                <option value="huge">Huge</option>
            </select>
        </div>

        <div class="form-group">
            <label for="noun2">Choose a Noun:</label>
            <select id="noun2">
                <option value="little cupcake">Little Cupcake</option>
                <option value="lemon">Lemon</option>
                <option value="potato">Potato</option>
            </select>
        </div>


        <button onclick="generateSecondSentence()">Generate</button>
        <div class="red-cross">✖</div>
    </div>

    <!-- 用于第二个游戏结果 -->
    <div id="finalResult"></div>

    <script src="script.js"></script>
</body>
</html>


