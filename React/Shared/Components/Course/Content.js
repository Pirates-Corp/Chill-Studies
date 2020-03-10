import React, { useState, useEffect } from 'react'
import courses from '../../Data/courses'
import {
    Typography,
    Paper,
    makeStyles,
    TextField,
    Button,
    AppBar,
    CardContent,
    CardMedia,
    Card,
    List,
    ListItem,
    ListItemIcon,
    Divider,
    Toolbar, withStyles, Container
} from '@material-ui/core'
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';


const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    handleButton :{
        margin: theme.spacing(4),
        float:'right'
      },
    link: {
        textDecoration: 'none',
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        margin: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));


const handleSubmit = (e, props, startTime) => {
    e.preventDefault()
    let time = Math.round(((Date.now() - startTime)/1000)/60)
    let score = time
    time = time >= 9 ? 9 : time
    console.log("score"+score)
    console.log("time"+time)
    props.history.push('/course/' + props.match.params.course + '/visual')
}

export default function Content(props) {
    const classes = useStyles()

    const startTime = Date.now()

    const course = courses.find((course) => props.match.params.course === course.name),
        category = props.match.params.category

    return (
        <form autoComplete="off" noValidate>
            <List >
                <ListItem>
                    <Typography variant='h2'>
                        Java
                </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        This article is about a programming language. For the software platform, see Java (software platform).
                        For the software package downloaded from java.com, see Java Platform, Standard Edition. For other uses, see Java (disambiguation).
                        Not to be confused with JavaScript.
                </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        Java is a general - purpose programming language that is class - based, object - oriented, and designed to have as few implementation dependencies as possible.It is intended to
                        let application developers write once, run anywhere(WORA), [15] meaning that compiled Java code can run on all platforms that support Java without the need
                        for recompilation. [16] Java applications are typically compiled to bytecode that can run on any Java virtual machine(JVM) regardless of the underlying computer architecture.The syntax of Java is similar to C and C++, but it has fewer low - level facilities than either of them.As of 2019, Java was one of the most popular programming languages in use according to GitHub, [17][18] particularly
                        for client - server web applications, with a reported 9 million developers. [19]
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        Java was originally developed by James Gosling at Sun Microsystems(which has since been acquired by Oracle) and released in 1995 as a core component of Sun Microsystems ' Java platform. The original and reference implementation Java compilers, virtual machines, and class libraries were originally released by Sun under proprietary licenses. As of May 2007, in compliance with the specifications of the Java Community Process, Sun had relicensed most of its Java technologies under the GNU General Public License. Meanwhile, others have developed alternative implementations of these Sun technologies, such as the GNU Compiler for Java (bytecode compiler), GNU Classpath (standard libraries), and IcedTea-Web (browser plugin for applets).
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        The latest versions are Java 13, released in September 2019, and Java 11, a currently supported long-term support (LTS) version, released on September 25, 2018; Oracle released for the legacy Java 8 LTS the last free public update in January 2019 for commercial use, while it will otherwise still support Java 8 with public updates for personal use up to at least December 2020. Oracle (and others) highly recommend uninstalling older versions of Java because of serious risks due to unresolved security issues.[20] Since Java 9 (and 10 and 12) is no longer supported, Oracle advises its users to immediately transition to the latest version (currently Java 13) or an LTS release.
                    </Typography>
                </ListItem>
                <Divider variant="middle" />
                <ListItem>
                    <Typography variant='h2'>
                        History
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        James Gosling, Mike Sheridan, and Patrick Naughton initiated the Java language project in June 1991.[21] Java was originally designed for interactive television, but it was too advanced for the digital cable television industry at the time.[22] The language was initially called Oak after an oak tree that stood outside Gosling's office. Later the project went by the name Green and was finally renamed Java, from Java coffee, the coffee from Indonesia.[23] Gosling designed Java with a C/C++-style syntax that system and application programmers would find familiar.[24]
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        Sun Microsystems released the first public implementation as Java 1.0 in 1996.[25] It promised Write Once, Run Anywhere (WORA) functionality, providing no-cost run-times on popular platforms. Fairly secure and featuring configurable security, it allowed network- and file-access restrictions. Major web browsers soon incorporated the ability to run Java applets within web pages, and Java quickly became popular. The Java 1.0 compiler was re-written in Java by Arthur van Hoff to comply strictly with the Java 1.0 language specification.[26] With the advent of Java 2 (released initially as J2SE 1.2 in December 1998 – 1999), new versions had multiple configurations built for different types of platforms. J2EE included technologies and APIs for enterprise applications typically run in server environments, while J2ME featured APIs optimized for mobile applications. The desktop version was renamed J2SE. In 2006, for marketing purposes, Sun renamed new J2 versions as Java EE, Java ME, and Java SE, respectively.
                    </Typography>
                </ListItem>
                <Divider variant="middle" />
                <ListItem>
                    <Typography variant='h2'>
                        Principles
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        1.It must be robust and secure.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        2.It must be architecture-neutral and portable.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        3.It must execute with high performance.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        4.It must be interpreted, threaded, and dynamic.
                    </Typography>
                </ListItem>
                <Divider variant="middle" />
                <ListItem>
                    <Typography variant='h2'>
                        Versions
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        *JDK 1.0 (January 23, 1996)[37]
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        *JDK 1.1 (February 19, 1996)
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        *J2SE 1.2 (December 8, 1998)
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        *J2SE 1.3 (May 8, 2000)
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        *J2SE 1.4 (February 6, 2002)
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        *J2SE 5.0 (September 30, 2004)
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        *Java SE 6 (December 11, 2006)
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        *Java SE 7 (July 28, 2011)
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        *Java SE 8 (March 18, 2014)
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        *Java SE 9 (September 21, 2017)
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        *Java SE 10 (March 20, 2018)
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        *Java SE 11 (September 25, 2018)[38]
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        *Java SE 12 (March 19, 2019)
                    </Typography>
                </ListItem>
                
                <Divider variant="middle" />
                <ListItem>
                    <Typography variant='h2'>
                        Editions
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        Java Card for smart-cards.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        Java Platform, Micro Edition (Java ME) – targeting environments with limited resources.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        Java Platform, Standard Edition (Java SE) – targeting workstation environments.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        Java Platform, Enterprise Edition (Java EE) – targeting large distributed enterprise or Internet environments.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='h2'>
                        Execution system
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='h6'>
                        Java JVM and Bytecode
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                    One design goal of Java is portability, which means that programs written for the Java platform must run similarly on any combination of hardware and operating system with adequate run time support. This is achieved by compiling the Java language code to an intermediate representation called Java bytecode, instead of directly to architecture-specific machine code. Java bytecode instructions are analogous to machine code, but they are intended to be executed by a virtual machine (VM) written specifically for the host hardware. End users commonly use a Java Runtime Environment (JRE) installed on their machine for standalone Java applications, or in a web browser for Java applets.

Standard libraries provide a generic way to access host-specific features such as graphics, threading, and networking.

The use of universal bytecode makes porting simple. However, the overhead of interpreting bytecode into machine instructions made interpreted programs almost always run more slowly than native executables. Just-in-time (JIT) compilers that compile byte-codes to machine code during runtime were introduced from an early stage. Java itself is platform-independent and is adapted to the particular platform it is to run on by a Java virtual machine for it, which translates the Java bytecode into the platform's machine language
                    </Typography>
                </ListItem>
                 <ListItem>
                    <Typography variant='h6'>
                        Performance
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                    Programs written in Java have a reputation for being slower and requiring more memory than those written in C++.[44][45] However, Java programs' execution speed improved significantly with the introduction of just-in-time compilation in 1997/1998 for Java 1.1,[46] the addition of language features supporting better code analysis (such as inner classes, the StringBuilder class, optional assertions, etc.), and optimizations in the Java virtual machine, such as HotSpot becoming the default for Sun's JVM in 2000. With Java 1.5, the performance was improved with the addition of the java.util.concurrent package, including lock free implementations of the ConcurrentMaps and other multi-core collections, and it was improved further with Java 1.6.
                    </Typography>
                </ListItem>
                 <ListItem>
                    <Typography variant='h6'>
                        Non-JVM
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='body1'>
                        Some platforms offer direct hardware support for Java; there are micro controllers that can run Java bytecode in hardware instead of a software Java virtual machine,[47] and some ARM-based processors could have hardware support for executing Java bytecode through their Jazelle option, though support has mostly been dropped in current implementations of ARM.
                    </Typography>
                </ListItem>
                <ListItem>
                    <Typography variant='h6'>
                        Automatic memory management
                    </Typography>
                </ListItem>
                 <ListItem>
                    <Typography variant='body1'>
                        Java uses an automatic garbage collector to manage memory in the object lifecycle. The programmer determines when objects are created, and the Java runtime is responsible for recovering the memory once objects are no longer in use. Once no references to an object remain, the unreachable memory becomes eligible to be freed automatically by the garbage collector. Something similar to a memory leak may still occur if a programmer's code holds a reference to an object that is no longer needed, typically when objects that are no longer needed are stored in containers that are still in use. If methods for a non-existent object are called, a null pointer exception is thrown.[48][49]

                        One of the ideas behind Java's automatic memory management model is that programmers can be spared the burden of having to perform manual memory management. In some languages, memory for the creation of objects is implicitly allocated on the stack or explicitly allocated and deallocated from the heap. In the latter case, the responsibility of managing memory resides with the programmer. If the program does not deallocate an object, a memory leak occurs. If the program attempts to access or deallocate memory that has already been deallocated, the result is undefined and difficult to predict, and the program is likely to become unstable or crash. This can be partially remedied by the use of smart pointers, but these add overhead and complexity. Note that garbage collection does not prevent logical memory leaks, i.e. those where the memory is still referenced but never used.

                        Garbage collection may happen at any time. Ideally, it will occur when a program is idle. It is guaranteed to be triggered if there is insufficient free memory on the heap to allocate a new object; this can cause a program to stall momentarily. Explicit memory management is not possible in Java.

                        Java does not support C/C++ style pointer arithmetic, where object addresses can be arithmetically manipulated (e.g. by adding or subtracting an offset). This allows the garbage collector to relocate referenced objects and ensures type safety and security.

                        As in C++ and some other object-oriented languages, variables of Java's primitive data types are either stored directly in fields (for objects) or on the stack (for methods) rather than on the heap, as is commonly true for non-primitive data types (but see escape analysis). This was a conscious decision by Java's designers for performance reasons.

                        Java contains multiple types of garbage collectors. By default, HotSpot uses the parallel scavenge garbage collector.[50] However, there are also several other garbage collectors that can be used to manage the heap. For 90% of applications in Java, the Concurrent Mark-Sweep (CMS) garbage collector is sufficient.[51] Oracle aims to replace CMS with the Garbage-First Collector (G1).[52]

                        Having solved the memory management problem does not relieve the programmer of the burden of handling properly other kind of resources, like network or database connections, file handles, etc., especially in the presence of exceptions. Paradoxically, the presence of a garbage collector has faded the necessity of having an explicit destructor method in the classes, thus rendering the management of these other resources more difficult.[citation needed]
                    </Typography>
                </ListItem>
            </List>
            <br />
            <Button variant="contained" color="primary" className={classes.handleButton} onClick={(e) => { handleSubmit(e, props, startTime) }}>
                Next
            </Button>
        </form>
    )
}
