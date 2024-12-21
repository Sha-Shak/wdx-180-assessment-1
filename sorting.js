function sortStringsByLength(strings)
{
    for (let i = 0; i < strings.length; i++)
    {
        for (let j = 0; j < strings.length - 1; j++)
        {
            if (strings[j].length > strings[j + 1].length)
            {
                let temp = strings[j];
                strings[j] = strings[j + 1];
                strings[j + 1] = temp;
             }
        }
    }

    return strings;
}
