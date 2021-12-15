

//https://stackoverflow.com/questions/10805125/how-to-remove-all-line-breaks-from-a-string
//https://www.tutorialspoint.com/how-to-remove-html-tags-from-a-string-in-javascript
function mostCommonWords(text, stoppwords=["der", "die", "das", "und", "oder", "doch", "weil", "an", "in", "von", "nicht", "den", "des", "bin", "ich", "bei", "werden", "zum"]) {
    let occurences = text.replace(/(\r\n|\n|\r)/gm, "").replace(/<[^>]+>/ig, "").replace(/(\.|,|"|\d\.|:|\(|\))/g,"").split(" ")
    .filter(word => !stoppwords.includes(word.toLowerCase()) && word !== '')
    .reduce((list, word) => {
        list[word] = (list[word]||0)+1;
        return list;
    }, []);    

    return Object.entries(occurences).sort((a, b) => { return b[1] - a[1]}).slice(0, 3);
}

let text = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plagiatsresolution</title>
</head>
<body>
<header><h2 class="field field--name-title field--type-ds field--label-hidden">Plagiatsresolution und -maßnahmen</h2></header>

<div class="content">

    <a target="_blank" class="%export%" href="./load.php?target=assets%2Fhtml%2Fplagiatsresolution">PDF export</a>
    <span class="%exported%">%filemtime%</span>

    <div  class="paragraphs-items paragraphs-items-field-pcf-content paragraphs-items-field-pcf-content-full paragraphs-items-full">
        <div class="field field-name-field-pcf-content">
            <div  class="entity entity-paragraphs-item paragraphs-item-para-text">
        <div class="field field--name-field-pf-text-wysiwyg field--type-text-long field--label-hidden">
            <p>
                <strong>Resolution zum akademischen Ethos und zu den akademischen Standards</strong></p>
            <p>
                In guter Tradition und anlässlich der öffentlichen Diskussion zum Plagiatsthema sieht sich die Hochschule Bonn-Rhein-Sieg in der Pflicht, ihre Position klar und eindeutig zu bekunden und hochschulweit Maßnahmen einzuleiten.</p>
            <p>
                1. Die Hochschule Bonn-Rhein-Sieg bekennt sich mit dieser Resolution öffentlich zum akademischen Ethos und den akademischen Standards.</p>
            <p>
                2. Die Hochschule Bonn-Rhein-Sieg sieht sich verpflichtet, alle Studierende frühzeitig im Studium sowohl über den wissenschaftlichen Auftrag und den akademischen Eth1os als auch über die Konsequenzen seiner Missachtung aufzuklären. In allen Studiengängen wird intensiv in die wissenschaftliche Arbeits- und Denkweise eingeführt und über den akademischen Ethos und die akademischen Standards klar und eindeutig aufgeklärt.</p>
            <p>
                3. In einer Selbstverpflichtungserklärung zum akademischen Ethos geben alle Studierende der Hochschule Bonn-Rhein-Sieg spätestens gegen Ende des ersten Studienjahres zum Ausdruck, dass sie sich von den Dozentinnen und Dozenten der Hochschule Bonn-Rhein-Sieg hinreichend über den akademischen Ethos und die akademischen Standards aufgeklärt sind und diese beachten werden.</p>
            <p>
                Der Senat befürwortete in seiner Sitzung am 03.05.2012 die Resolution in der o.g. Fassung.</p>
            <p>
                <strong>Eckpunkte zur Plagiatsprüfung</strong></p>
            <p>
                Der Senat empfiehlt:</p>
            <p>
                1. Die Aufklärung und das Bekenntnis zum akademischen Ethos und den akademischen Standards muss fester Bestandteil aller Curricula aller Studiengänge im ersten Studienjahr sein. Alle Curricula aller Studiengänge werden darauf hin geprüft und ggfs. ergänzt.</p>
            <p>
                2. Alle Abschlussarbeiten werden auf Plagiate geprüft.</p>
            <p>
                3. Alle Abschlussarbeiten mit Plagiaten werden grundsätzlich als Fehlversuch gewertet.</p>
            <p>
                4. Die Entscheidung, ob die Arbeit Plagiate enthält, liegt zuerst bei den Gutachterinnen und Gutachtern. Der Nachweis in einem Gutachten reicht.</p>
            <p>
                5. Alle Abschlussarbeiten werden grundsätzlich auch in elektronischer Form (PDF-Format und Originalformat wie Word, OpenOffice, ...) eingereicht.</p>
            <p>
                6. Alle Abschlussarbeiten ohne Sperrvermerk werden einem vom Fachbereich definierten Kreis zur Einsicht zur Verfügung gestellt. Alle Abschlussarbeiten sollten nach Möglichkeit grundsätzlich zur Veröffentlichung freigegeben werden. Wissenschaft zielt auf Veröffentlichung ab. Nichtveröffentlichung sollte nur in begründeten und durch den Prüfungsausschuss genehmigten Ausnahmefällen geschehen.</p>
            <p>
                7. Im Bereich von Seminar-, Hausarbeiten und Praktikumsberichten behält sich die Hochschule stichprobenartige Plagiatsprüfungen vor.</p>
            <p>
                <strong>Selbstverpflichtungserklärung der Studierenden:</strong></p>
            <p>
                Eine akademische Arbeit stellt eine individuelle Leistung dar, die eigenständig und allein auf Basis der im Literaturverzeichnis angegebenen Quellen erstellt wurde und in der alle Zitate als solche gekennzeichnet sind.</p>
            <p>
                "Ich erkläre hiermit, dass ich den akademischen Ehrencodex kenne und über die Folgen einer Missachtung oder Verletzung aufgeklärt worden bin."</p>

        </div>
    </div>
    </div>
    </div>
</div>


</article>
</body>
</html>
`;

console.log("Result", mostCommonWords(text));
