$excludeList = @("stuff","bin","obj*")
$files = Get-ChildItem -Recurse -Path ".\src\ruby-theme" -File -Filter "*.less"| % {
    $pathParts = $_.FullName.substring($pwd.path.Length + 1).split("\");
    if ( ! ($excludeList | where { $pathParts -like $_ } ) ) { $_ }
} 

$files | ForEach-Object -Process {
    $style = $_.FullName -replace ".less", ".styl"
    echo $_.FullName
    &less2stylus $_.FullName > $style
}

$i = 1