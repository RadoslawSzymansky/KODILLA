process.stdin.on('readable', function () {
    var input = process.stdin.read();
    if (input !== null) {
        var instruction = input.toString().trim();
        switch (instruction) {
            case '/end':
                process.stdout.write('Quitting app!\n');
                process.exit();
                break;
            case "/version":
                process.stdout.write(`Current version of node is: ${process.versions.node}\n`)
                break;
            case "/language":
                process.stdout.write(`Your system language is: ${process.env.LANG}\n`)
                break;
            default:
                process.stderr.write('Wrong instruction!\n');
        }
    }
});