// blob:http://localhost:3003/1b6c8682-6656-45a8-bb67-abaf7851bc35

// @ts-ignore
document.getElementById("refresh").focus()
// @ts-ignore
document.getElementById("refresh").onclick = () => {
    main()
}
// @ts-ignore
document.getElementById("input_colors").onchange = (e) => {
    try {
        main(// @ts-ignore
            JSON.parse(e.target.value))
    } catch {
        main()
    }
}

main()

function main(preset_colors?: string[]) {
    let gradient = document.getElementById("gradient") as any as SVGLinearGradientElement
    gradient.setAttribute("cx", "50%")
    gradient.setAttribute("cy", "50%")
    gradient.setAttribute("r", "100%")
    gradient.setAttribute("fx", "0%")
    gradient.setAttribute("fy", "100%")
    gradient.id = "gradient"
    let colors: string[] = []
    if (preset_colors) {
        colors = preset_colors
    } else {
        colors.push(generateColor())
        colors.push(generateColor())
        colors.push(generateColor())
    }
    console.log(colors)
    let gradientStop1 = `<stop offset="0%"`
    let gradientStop2 = `<stop offset="50%"`
    let gradientStop3 = `<stop offset="100%"`
    gradientStop1 += `style="stop-color:${colors[0]};stop-opacity:1"/>`
    gradientStop2 += `style="stop-color:${colors[1]};stop-opacity:1"/>`
    gradientStop3 += `style="stop-color:${colors[2]};stop-opacity:1"/>`
    gradient.innerHTML = gradientStop1 + gradientStop2 + gradientStop3
    // @ts-ignore
    let blob = new Blob([document.getElementById("blobsvg").innerHTML], {type: "image/svg+xml"})
    let url = URL.createObjectURL(blob)
    console.log(url)
}

function generateColor(): string {
    let outValue = "#"
    // generate a hex color code
    for (let i = 0; i < 6; i++) {
        let randomNumber = Math.floor(Math.random() * 16)
        let appendChar = ""
        switch (randomNumber) {
            case 0:
                appendChar = "0"
                break
            case 1:
                appendChar = "1"
                break
            case 2:
                appendChar = "2"
                break
            case 3:
                appendChar = "3"
                break
            case 4:
                appendChar = "4"
                break
            case 5:
                appendChar = "5"
                break
            case 6:
                appendChar = "6"
                break
            case 7:
                appendChar = "7"
                break
            case 8:
                appendChar = "8"
                break
            case 9:
                appendChar = "9"
                break
            case 10:
                appendChar = "a"
                break
            case 11:
                appendChar = "b"
                break
            case 12:
                appendChar = "c"
                break
            case 13:
                appendChar = "d"
                break
            case 14:
                appendChar = "e"
                break
            case 15:
                appendChar = "f"
                break
        }
        outValue += appendChar

    }
    return outValue
}