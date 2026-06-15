const display = document.getElementById("display");
const body = document.body;
const toggleBtn = document.getElementById("theme-toggle");

body.classList.add("light");

function appendValue(value)
{
    display.value += value;
}

function clearDisplay()
{
    display.value = "";
}

function deleteLast()
{
    display.value = display.value.slice(0, -1);
}

function toggleSign()
{
    if(display.value)
    {
        if(display.value.startsWith('-'))
        {
            display.value = display.value.substring(1);
        }
        else
        {
            display.value = '-' + display.value;
        }
    }
}

function calculate()
{
    try
    {
        let expression = display.value;

        document.getElementById("history").textContent = expression + " =";

        expression = expression.replace(/%/g, '/100');

        display.value = eval(expression);
    }
    catch
    {
        display.value = "Error";
    }
}

toggleBtn.addEventListener("click", () => 
{
    if(body.classList.contains("light"))
    {
        body.classList.remove("light");
        body.classList.add("dark");
        toggleBtn.textContent = "☀️";
    }
    else
    {
        body.classList.remove("dark");
        body.classList.add("light");
        toggleBtn.textContent = "🌙";
    }
});